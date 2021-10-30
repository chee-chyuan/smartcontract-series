import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, should } from "chai";
import { ethers } from "hardhat";
import { Erc721Implementation } from "../src/types/Erc721Implementation";
import { Erc721ContractFactory } from "../src/types/Erc721ContractFactory";
import CreateCloneArg from "./utils/createCloneArg";
import { CreatedNewCloneContract } from "./utils/eventNames";
import { convertBytes32ToAddress } from "./utils/utils";

describe("test all admin functionality", () => {
    let erc721ImplementationContract: Erc721Implementation;
    let erc721ContractFactory: Erc721ContractFactory;
    let proxyContract: Erc721Implementation;
    let owner: SignerWithAddress;
    let user1: SignerWithAddress;

    before(async () => {
        [owner, user1] = await ethers.getSigners();

        //deploy erc721 implementation
        let Erc721ImplementationContract = await ethers.getContractFactory("Erc721Implementation");
        erc721ImplementationContract = await Erc721ImplementationContract.deploy();

        //deploy factory
        let Erc721ContractFactory = await ethers.getContractFactory("Erc721ContractFactory");
        erc721ContractFactory = await Erc721ContractFactory.deploy(erc721ImplementationContract.address);

        //clone an implementation
        let createCloneTx = await erc721ContractFactory.connect(owner).createClone(CreateCloneArg.name, CreateCloneArg.symbol, CreateCloneArg.maxSupply, CreateCloneArg.price);
        let cloneReceipt = await createCloneTx.wait();

        let cloneAddress = cloneReceipt.events?.filter((x) => { return x.event === CreatedNewCloneContract })[0].topics[1];

        let proxyAddress = convertBytes32ToAddress(cloneAddress as string);
        proxyContract = await ethers.getContractAt("Erc721Implementation", proxyAddress);
    })

    it("after paused, check pause length, pause list ", async () => {
        //pause an clone
        let pauseTx = await erc721ContractFactory.pause(proxyContract.address);
        //check totalpaused length
        let pausedListLength = await erc721ContractFactory.totalPaused();
        expect(pausedListLength).to.equal(1);

        //check is cloneId is in the _pausedList
        let cloneId = await erc721ContractFactory._cloneAddressIds(proxyContract.address);
        let pausedIndex = await erc721ContractFactory._pausedCloneIndex(cloneId);

        let pausedCloneAddress = await erc721ContractFactory._pausedList(pausedIndex);
        expect(pausedCloneAddress).to.equal(cloneId);

        expect(await proxyContract.paused()).to.true;
    })

    it("after paused, check unpause length to be equal to 0", async () => {
        //check totalunpaused
        expect(await erc721ContractFactory.totalUnpaused()).to.equal(0);
    })

    it("after unpaused, check unpause length, unpause list", async () => {
        let unpausedTx = await erc721ContractFactory.unpause(proxyContract.address);
        //check totalunpaused length
        expect(await erc721ContractFactory.totalUnpaused()).to.equal(1);

        //check is cloneId is in the _unpausedList
        let cloneId = await erc721ContractFactory._cloneAddressIds(proxyContract.address);
        let unpausedIndex = await erc721ContractFactory._unpausedCloneIndex(cloneId);

        let unpausedCloneAddress = await erc721ContractFactory._unpausedList(unpausedIndex);
        expect(unpausedCloneAddress).to.equal(cloneId);

        expect(await proxyContract.paused()).to.not.true;
    })

    it("after unpaused, check pause length to be equal to 0", async () => {
        //check unpaused
        expect(await erc721ContractFactory.totalPaused()).to.equal(0);
    })
})