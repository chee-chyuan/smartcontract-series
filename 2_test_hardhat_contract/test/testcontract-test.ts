import { expect } from "chai";
import { ethers } from "hardhat";
//import { TestContract } from "../src/types/TestContract";

describe("TestContract test", () => {
    let initValue = 10;
    let contract: any;

    before(async () => {
        const TestContract = await ethers.getContractFactory("TestContract");
        contract = await TestContract.deploy(initValue);

        console.log(`Contract has been deployed to ${contract.address}`);


    });

    it("Should return correct init value", async () => {
        let val = await contract.get();
        console.log(val);
        expect(val).to.equal(initValue);
    })

    it("Should increment correctly", async() => {
        await contract.increment();
        let val = await contract.get();
        console.log(val);
        let incrementedValue = initValue + 1;
        expect(val).to.equal(incrementedValue);
    })

    it("should decrement back to initial value", async()=> {
        await contract.decrement();
        let val = await contract.get();
        console.log(val);
        expect(val.toString()).to.equal(initValue.toString());
    })
})