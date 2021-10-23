import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, should } from "chai";
import { ethers } from "hardhat";
import { CustomNft } from "../src/types/CustomNft";

describe("Test custom nft", () => {
    let customNft: CustomNft;
    let owner: SignerWithAddress;

    before(async () => {
        [owner] = await ethers.getSigners();
        const CustomNftFactory = await ethers.getContractFactory("CustomNft");
        customNft = (await CustomNftFactory.deploy("test", "tst", 20)) as CustomNft;

        let mintTx = await customNft.Mint(owner.address);
        await mintTx.wait();
    })

    it("should not be able to mint if contract is paused", async () => {
        let pauseTx = await customNft.pause();
        await pauseTx.wait();

        await expect(customNft.Mint(owner.address)).to.be.revertedWith("Pausable: paused");
    })

    it("should be able to mint if contract is unpaused", async () => {
        let unpausedTx = await customNft.unpause();
        await unpausedTx.wait();

        //let mintTx = await customNft.Mint(owner.address)
        await expect(customNft.Mint(owner.address)).to.emit(customNft, "Transfer");
    })
})