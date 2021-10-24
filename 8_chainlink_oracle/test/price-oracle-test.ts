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
    let fakeEthUsdPrice: number = 410000000000;

    before(async () => {
        //deploy fake external oracle
        fakeChainLinkOracle = await smock.fake<IExternalOracle>("IExternalOracle");
        let fakeChainLinkOracleAddr = fakeChainLinkOracle.address;

        //deploy price oracle wrapper
        let PriceOracleWrapperFactory = await ethers.getContractFactory("PriceOracleWrapper");
        priceOracleWrapper = (await PriceOracleWrapperFactory.deploy(fakeChainLinkOracleAddr, 8, 8)) as PriceOracleWrapper;

        //deploy callprice contract
        let CallPriceContractFactory = await ethers.getContractFactory("CallPriceContract");
        callPriceContract = (await CallPriceContractFactory.deploy(priceOracleWrapper.address)) as CallPriceContract;

        //init fake usd price
        fakeChainLinkOracle.latestAnswer.returns(fakeEthUsdPrice);
    })

    it("convert usd price to wei correctly", async () => {
        let usdPriceRaw = 5;
        let usdPriceNormalized = ethers.utils.parseUnits(usdPriceRaw.toString(), 8);
        let fakeEthUsdPriceBN = ethers.BigNumber.from(fakeEthUsdPrice.toString());

        let expectedPriceInWei = ethers.utils.parseEther(usdPriceNormalized.toString()).div(fakeEthUsdPriceBN);
        console.log(`wei price is ${expectedPriceInWei}`);

        let priceInWei = await callPriceContract.calculatePrice(usdPriceNormalized);
        console.log(`wei price from contract is ${priceInWei}`);
        expect(priceInWei).to.equal(expectedPriceInWei);
    })
})