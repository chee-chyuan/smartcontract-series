/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MinimalProxyFactory,
  MinimalProxyFactoryInterface,
} from "../MinimalProxyFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "CreatedNewCloneContract",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_someText",
        type: "string",
      },
    ],
    name: "createClone",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "setImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610cff380380610cff83398181016040528101906100329190610176565b61004e61004361009560201b60201c565b61009d60201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101e8565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050610170816101d1565b92915050565b60006020828403121561018857600080fd5b600061019684828501610161565b91505092915050565b60006101aa826101b1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101da8161019f565b81146101e557600080fd5b50565b610b08806101f76000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063038295cb146100675780635c60da1b14610083578063715018a6146100a15780638da5cb5b146100ab578063d784d426146100c9578063f2fde38b146100e5575b600080fd5b610081600480360381019061007c9190610734565b610101565b005b61008b61025e565b6040516100989190610826565b60405180910390f35b6100a9610284565b005b6100b361030c565b6040516100c09190610826565b60405180910390f35b6100e360048036038101906100de919061070b565b610335565b005b6100ff60048036038101906100fa919061070b565b6103f5565b005b6101096104ed565b73ffffffffffffffffffffffffffffffffffffffff1661012761030c565b73ffffffffffffffffffffffffffffffffffffffff161461017d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610174906108a3565b60405180910390fd5b60006101aa600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166104f5565b90508073ffffffffffffffffffffffffffffffffffffffff1663f62d1888836040518263ffffffff1660e01b81526004016101e59190610841565b600060405180830381600087803b1580156101ff57600080fd5b505af1158015610213573d6000803e3d6000fd5b505050508073ffffffffffffffffffffffffffffffffffffffff167f532e33e26b328a15d92390fcf2bc515e3670105ea3a848159f326131fdca55c560405160405180910390a25050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61028c6104ed565b73ffffffffffffffffffffffffffffffffffffffff166102aa61030c565b73ffffffffffffffffffffffffffffffffffffffff1614610300576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f7906108a3565b60405180910390fd5b61030a60006105ca565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61033d6104ed565b73ffffffffffffffffffffffffffffffffffffffff1661035b61030c565b73ffffffffffffffffffffffffffffffffffffffff16146103b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a8906108a3565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6103fd6104ed565b73ffffffffffffffffffffffffffffffffffffffff1661041b61030c565b73ffffffffffffffffffffffffffffffffffffffff1614610471576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610468906108a3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d890610863565b60405180910390fd5b6104ea816105ca565b50565b600033905090565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156105c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bc90610883565b60405180910390fd5b919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006106a161069c846108e8565b6108c3565b9050828152602081018484840111156106b957600080fd5b6106c4848285610967565b509392505050565b6000813590506106db81610abb565b92915050565b600082601f8301126106f257600080fd5b813561070284826020860161068e565b91505092915050565b60006020828403121561071d57600080fd5b600061072b848285016106cc565b91505092915050565b60006020828403121561074657600080fd5b600082013567ffffffffffffffff81111561076057600080fd5b61076c848285016106e1565b91505092915050565b61077e81610935565b82525050565b600061078f82610919565b6107998185610924565b93506107a9818560208601610976565b6107b281610a09565b840191505092915050565b60006107ca602683610924565b91506107d582610a1a565b604082019050919050565b60006107ed601683610924565b91506107f882610a69565b602082019050919050565b6000610810602083610924565b915061081b82610a92565b602082019050919050565b600060208201905061083b6000830184610775565b92915050565b6000602082019050818103600083015261085b8184610784565b905092915050565b6000602082019050818103600083015261087c816107bd565b9050919050565b6000602082019050818103600083015261089c816107e0565b9050919050565b600060208201905081810360008301526108bc81610803565b9050919050565b60006108cd6108de565b90506108d982826109a9565b919050565b6000604051905090565b600067ffffffffffffffff821115610903576109026109da565b5b61090c82610a09565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061094082610947565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b83811015610994578082015181840152602081019050610979565b838111156109a3576000848401525b50505050565b6109b282610a09565b810181811067ffffffffffffffff821117156109d1576109d06109da565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b610ac481610935565b8114610acf57600080fd5b5056fea264697066735822122044e457094c2ca21ab0b6de8a1d08ad367c9738f547e12aa512f7ccd16591b3ff64736f6c63430008040033";

export class MinimalProxyFactory__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MinimalProxyFactory> {
    return super.deploy(
      _implementation,
      overrides || {}
    ) as Promise<MinimalProxyFactory>;
  }
  getDeployTransaction(
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_implementation, overrides || {});
  }
  attach(address: string): MinimalProxyFactory {
    return super.attach(address) as MinimalProxyFactory;
  }
  connect(signer: Signer): MinimalProxyFactory__factory {
    return super.connect(signer) as MinimalProxyFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalProxyFactoryInterface {
    return new utils.Interface(_abi) as MinimalProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinimalProxyFactory {
    return new Contract(address, _abi, signerOrProvider) as MinimalProxyFactory;
  }
}