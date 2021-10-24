import { FakeContract, smock } from '@defi-wonderland/smock';
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect, should } from "chai";
import { ethers } from "hardhat";
import { CallPriceContract } from "../src/types/CallPriceContract";
import { PriceOracleWrapper } from "../src/types/PriceOracleWrapper";
import { IExternalOracle } from "../src/types/IExternalOracle";

describe("Test price oracle", () => {
    let fakeChainLinkOracle: FakeContract<IExternalOracle>;
    let priceOracleWrapper: PriceOracleWrapper;
    let callPriceContract: CallPriceContract;

    before(async () => {
        //deploy fake external oracle
        fakeChainLinkOracle = await smock.fake<IExternalOracle>("ExternalOracle");
        let fakeChainLinkOracleAddr = fakeChainLinkOracle.address;

        //deploy price oracle wrapper
        let PriceOracleWrapperFactory = await ethers.getContractFactory("PriceOracleWrapper");
        priceOracleWrapper = (await PriceOracleWrapperFactory.deploy(fakeChainLinkOracleAddr, 8, 8)) as PriceOracleWrapper;

        //deploy callprice contract
        let CallPriceContractFactory = await ethers.getContractFactory("CallPriceContract");
        callPriceContract = (await CallPriceContractFactory.deploy(priceOracleWrapper.address)) as CallPriceContract;
    })
})