import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, should } from "chai";
import { ethers } from "hardhat";
import { Erc721Implementation } from "../src/types/Erc721Implementation";
import { Erc721ContractFactory } from "../src/types/Erc721ContractFactory";
import CreateCloneArg from "./utils/createCloneArg";
import { CreatedNewCloneContract } from "./utils/eventNames";
import { convertBytes32ToAddress } from "./utils/utils";

describe("deploy contract, check owners and initial settings", () => {
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
    })

    it("factory owner should be the address deploying the contract", async () => {
        let factoryOwner = await erc721ContractFactory.owner();

        expect(factoryOwner).to.equal(owner.address);
    })

    it("deployed contract by owner with proxy having factory as the owner", async () => {
        await expect(erc721ContractFactory.connect(user1).createClone(CreateCloneArg.name, CreateCloneArg.symbol, CreateCloneArg.maxSupply, CreateCloneArg.price)).to.reverted;
    })

    it("owner is able to deploy contract and check clone contract owner to be address of factory", async () => {
        let createCloneTx = await erc721ContractFactory.connect(owner).createClone(CreateCloneArg.name, CreateCloneArg.symbol, CreateCloneArg.maxSupply, CreateCloneArg.price);
        let cloneReceipt = await createCloneTx.wait();

        let cloneAddress = cloneReceipt.events?.filter((x) => { return x.event === CreatedNewCloneContract })[0].topics[1];
        if (!cloneAddress) {
            should().fail();
        }

        let proxyAddress = convertBytes32ToAddress(cloneAddress as string);
        proxyContract = await ethers.getContractAt("Erc721Implementation", proxyAddress);

        expect(await proxyContract.owner()).to.equal(erc721ContractFactory.address);
    })

    it("check totalUnpaused to equal to 1 after clone deployment", async () => {
        expect(await erc721ContractFactory.totalUnpaused()).to.equal(1);
        expect(await erc721ContractFactory._cloneExists(proxyContract.address)).to.be.true;
        expect((await erc721ContractFactory._cloneAddresses(ethers.BigNumber.from(1))).toLowerCase()).to.equal(proxyContract.address);
    })
})