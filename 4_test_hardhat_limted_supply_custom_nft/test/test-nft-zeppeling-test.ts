import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { TestNftZeppelin } from "../src/types/TestNftZeppelin";

describe("Testing TestNftZeppeling Contract", () => {
    let testNftZeppelinContract: TestNftZeppelin;
    let name = "MyCollectible";
    let symbol = "MCO";

    before(async () => {
        const TestNftZeppelinContractFactory = await ethers.getContractFactory("TestNftZeppelin");
        testNftZeppelinContract = (await TestNftZeppelinContractFactory.deploy()) as TestNftZeppelin;
    })

    it("check if testnftzeppelin is deployed correctly", async () => {
        let nftName = await testNftZeppelinContract.name();

        expect(nftName).to.equal(name);
        
        let nftSymbol = await testNftZeppelinContract.symbol();
        expect(symbol).to.equal(symbol);
    })
})