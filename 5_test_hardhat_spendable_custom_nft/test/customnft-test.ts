import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, should } from "chai";
import { ethers } from "hardhat";
import { CustomNft } from "../src/types/CustomNft";

describe("Test CustomNft, spendable", () => {
    let customNft: CustomNft;
    let name = "Coffee Nft";
    let symbol = "Coffee";
    let totalSupply = 5;
    let owner: SignerWithAddress;
    let user1: SignerWithAddress;
    let user1TokenId: number;
    let hasBeenSpentErrorMessage = "This token has been spend";

    before(async () => {
        [owner, user1] = await ethers.getSigners();

        let CustomNftFactory = await ethers.getContractFactory("CustomNft", owner);
        customNft = (await CustomNftFactory.deploy(name, symbol, totalSupply)) as CustomNft;

        //mint nft
        let mintTx = await customNft.Mint(user1.address);
        let mintReceipt = await mintTx.wait();

        let tokenIdHex = mintReceipt.events?.filter((x) => { return x.event === "Transfer" })[0].topics[3];
        user1TokenId = ethers.BigNumber.from(tokenIdHex).toNumber();
    })

    //refer to 4_test_hard_limited_supply_custom_nft for more testing
    //i will be focusing on spending and ownership in this test 
    it("check if owner is set correct", async () => {
        let ownerRes = await customNft.owner();
        expect(ownerRes).to.equal(owner.address);
    })

    it("normal user is not able to consume nft", async () => {
        await expect(customNft.connect(user1).ConsumeNft(user1TokenId)).to.be.reverted;
    })

    it("owner is able to consume nft", async () => {
        let tx = await customNft.connect(owner).ConsumeNft(user1TokenId);
        expect(tx).to.emit(customNft, "ConsumedNft")
            .withArgs(owner.address, user1TokenId);

        let [_, spendStatus] = await customNft.GetTokenInfo(user1TokenId);
        expect(spendStatus).to.be.true;
    })

    it("owner cannot spend the same token again", async () => {
        await expect(customNft.ConsumeNft(user1TokenId)).to.be.revertedWith(hasBeenSpentErrorMessage);
    })
})