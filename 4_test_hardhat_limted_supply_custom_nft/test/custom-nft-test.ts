import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, should } from "chai";
import { ethers } from "hardhat";
import { CustomNft } from "../src/types/CustomNft"

describe("Testing Custom Nft", () => {
    let customNft: CustomNft;
    let name = "Coffee Nft";
    let symbol = "Coffee";
    let remainingSupply = 5;
    let receiver1: SignerWithAddress;
    let currentIndex = 0;
    let noMoreSupplyMessage = "No more supply";

    before(async () => {
        let CustomNftFactory = await ethers.getContractFactory("CustomNft");
        customNft = (await CustomNftFactory.deploy(name, symbol, remainingSupply)) as CustomNft;
    })

    it("check totalSupply and remaining cups.", async () => {
        let totalSupplyRes = await customNft.totalSupply();
        let remainingRes = await customNft.remainingSupply();

        expect(totalSupplyRes).to.equal(remainingRes)
            .to.equal(remainingSupply);
    })

    it("mint nft, check Mint Event", async () => {
        [receiver1] = await ethers.getSigners();
        let mintTx = await customNft.Mint(receiver1.address);
        expect(mintTx)
            .to.emit(customNft, "Transfer")
            .withArgs(ethers.constants.AddressZero, receiver1.address, currentIndex);
    })

    it("check owner of token id 0", async () => {
        let token0Owner = await customNft.ownerOf(currentIndex);
        expect(token0Owner).to.equal(receiver1.address);
    })

    it("current index has incremented by 1 and remaining supply has been reduced by 1", async () => {
        currentIndex++;
        remainingSupply--;

        let indexRes = await customNft.GetCurrentTokenId();
        expect(indexRes).to.equal(currentIndex);

        let remainingRes = await customNft.remainingSupply();
        expect(remainingRes).to.equal(remainingSupply);
    })

    it("reduce supply to 0 and revert with message for when any more nft is minted", async () => {
        for (var i = 0; i < remainingSupply; i++) {
            await customNft.Mint(receiver1.address);
        }

        await expect(customNft.Mint(receiver1.address)).to.be.revertedWith(noMoreSupplyMessage);
    })
})