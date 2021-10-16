import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { convertBytes32ToAddress } from "./utility/utility";

describe("Deploying a contact from a contract factory", () => {
    let contractFactory: any;
    let contractSpawn: any;
    let owner: SignerWithAddress
    let initValue: number = 5;

    before(async () => {
        console.log("Deploying contact factory");

        [owner] = await ethers.getSigners();
        console.log(`Owner address is ${owner.address}`);

        const ContractFactory = await ethers.getContractFactory("ContractFactory");
        contractFactory = await ContractFactory.deploy(owner.address);

        console.log(`Contract has been deployed to ${contractFactory.address}`);
    })

    it("check owner is set correctly", async () => {
        let ownerRes = await contractFactory.owner();
        expect(ownerRes).to.equal(owner.address);
    })

    it("deploy a contract from a factory", async () => {
        let tx = await contractFactory.testDeployCreate();

        let receipt = await tx.wait();

        //console.log(`receipt: ${JSON.stringify(receipt)}`);

        let newContractEvent = receipt.events.filter((x: any) => { return x.event == "NewContract" });
        let contractAddr = convertBytes32ToAddress(newContractEvent[0].data as string);
        console.log(`child contract address ${contractAddr}`);

        const ContractSpawn = await ethers.getContractFactory('ContractSpawn');
        contractSpawn = await ContractSpawn.attach(contractAddr);

        let initVal = await contractSpawn.get();

        expect(initVal).to.equal(initValue);
    })

    it("child contract should increment correctly", async () => {
        await contractSpawn.increment();
        let val = await contractSpawn.get();
        expect(val).to.equal(initValue + 1);
    })

    it("child contract should decrement correctly", async () => {
        await contractSpawn.decrement();
        let val = await contractSpawn.get();
        expect(val).to.equal(initValue);
    })
})