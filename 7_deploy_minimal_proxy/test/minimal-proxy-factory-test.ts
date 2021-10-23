import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, should } from "chai";
import { ethers } from "hardhat";
import { MinimalProxyFactory } from "../src/types/MinimalProxyFactory";
import { Greeter } from "../src/types/Greeter";
import { convertBytes32ToAddress } from "./utils/utils";

describe("Test minimal proxy", () => {
    let minimalProxyFactory: MinimalProxyFactory;
    let initialCloneText = "this is a text";
    let createCloneEventName = "CreatedNewCloneContract";
    let greeterProxyAddress: string;

    before(async () => {
        //deploy implementation
        let Greeter = await ethers.getContractFactory("Greeter");
        let greeter = await Greeter.deploy();

        //deploy minimalProxyFactory
        let MinimalProxyFactory = await ethers.getContractFactory("MinimalProxyFactory");
        minimalProxyFactory = (await MinimalProxyFactory.deploy(greeter.address)) as MinimalProxyFactory;
    })

    it("Deploy clone and check if is initialized correctly", async () => {
        let cloneTx = await minimalProxyFactory.createClone(initialCloneText);
        let cloneReceipt = await cloneTx.wait();

        let cloneAddress = cloneReceipt.events?.filter((x) => { return x.event === createCloneEventName })[0].topics[1];
        if (!cloneAddress) {
            should().fail();
        }
        greeterProxyAddress = convertBytes32ToAddress(cloneAddress as string);
        let greeterProxy = (await ethers.getContractAt("Greeter", greeterProxyAddress)) as Greeter;
        expect(await greeterProxy.greet()).to.equal(initialCloneText);
    })

    it("Unable to initialized proxy after it has already been initialized", async () => {
        let greeterProxy = (await ethers.getContractAt("Greeter", greeterProxyAddress)) as Greeter;
        await expect(greeterProxy.initialize("some random text")).to.be.reverted;
    })
})