/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ContractFactoryStorageInterface extends ethers.utils.Interface {
  functions: {
    "_cloneAddressIds(address)": FunctionFragment;
    "_cloneAddresses(uint256)": FunctionFragment;
    "_cloneExists(address)": FunctionFragment;
    "_pausedCloneIndex(uint256)": FunctionFragment;
    "_pausedList(uint256)": FunctionFragment;
    "_prices(address)": FunctionFragment;
    "_proxyDetails(address)": FunctionFragment;
    "_tokenIdCounter()": FunctionFragment;
    "_unpausedCloneIndex(uint256)": FunctionFragment;
    "_unpausedList(uint256)": FunctionFragment;
    "totalPaused()": FunctionFragment;
    "totalUnpaused()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_cloneAddressIds",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_cloneAddresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_cloneExists",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_pausedCloneIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_pausedList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "_prices", values: [string]): string;
  encodeFunctionData(
    functionFragment: "_proxyDetails",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "_tokenIdCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_unpausedCloneIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_unpausedList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalPaused",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalUnpaused",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_cloneAddressIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_cloneAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_cloneExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_pausedCloneIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_pausedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_prices", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_proxyDetails",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_tokenIdCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_unpausedCloneIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_unpausedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalPaused",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalUnpaused",
    data: BytesLike
  ): Result;

  events: {};
}

export class ContractFactoryStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ContractFactoryStorageInterface;

  functions: {
    _cloneAddressIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _cloneAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    _cloneExists(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    _pausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _pausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _prices(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    _proxyDetails(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        Name: string;
        Symbol: string;
        Description: string;
        Uri: string;
      }
    >;

    _tokenIdCounter(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _value: BigNumber }>;

    _unpausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _unpausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalPaused(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalUnpaused(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _cloneAddressIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  _cloneAddresses(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  _cloneExists(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  _pausedCloneIndex(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _pausedList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _prices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  _proxyDetails(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      Name: string;
      Symbol: string;
      Description: string;
      Uri: string;
    }
  >;

  _tokenIdCounter(overrides?: CallOverrides): Promise<BigNumber>;

  _unpausedCloneIndex(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _unpausedList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalPaused(overrides?: CallOverrides): Promise<BigNumber>;

  totalUnpaused(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _cloneAddressIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _cloneAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    _cloneExists(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    _pausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _pausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _prices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _proxyDetails(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        Name: string;
        Symbol: string;
        Description: string;
        Uri: string;
      }
    >;

    _tokenIdCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _unpausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _unpausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalPaused(overrides?: CallOverrides): Promise<BigNumber>;

    totalUnpaused(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    _cloneAddressIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _cloneAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _cloneExists(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _pausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _pausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _prices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _proxyDetails(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    _tokenIdCounter(overrides?: CallOverrides): Promise<BigNumber>;

    _unpausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _unpausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalPaused(overrides?: CallOverrides): Promise<BigNumber>;

    totalUnpaused(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _cloneAddressIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _cloneAddresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _cloneExists(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _pausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _pausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _prices(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _proxyDetails(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _tokenIdCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _unpausedCloneIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _unpausedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalUnpaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
