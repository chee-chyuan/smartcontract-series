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
        let createCloneTx = await erc721ContractFactory.connect(owner).createClone(CreateCloneArg.name, CreateCloneArg.symbol, CreateCloneArg.maxSupply);
        let cloneReceipt = await createCloneTx.wait();

        let cloneAddress = cloneReceipt.events?.filter((x) => { return x.event === CreatedNewCloneContract })[0].topics[1];   

        let proxyAddress = convertBytes32ToAddress(cloneAddress as string);
        proxyContract = await ethers.getContractAt("Erc721Implementation", proxyAddress);
    })

    it("test paused", async () => {

    })

    it("test unpaused", async () => {

    })
})