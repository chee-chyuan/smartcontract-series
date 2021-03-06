/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "CallPriceContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CallPriceContract__factory>;
    getContractFactory(
      name: "IExternalOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExternalOracle__factory>;
    getContractFactory(
      name: "IPriceOracleWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPriceOracleWrapper__factory>;
    getContractFactory(
      name: "PriceOracleWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PriceOracleWrapper__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "CallPriceContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CallPriceContract>;
    getContractAt(
      name: "IExternalOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExternalOracle>;
    getContractAt(
      name: "IPriceOracleWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPriceOracleWrapper>;
    getContractAt(
      name: "PriceOracleWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PriceOracleWrapper>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
