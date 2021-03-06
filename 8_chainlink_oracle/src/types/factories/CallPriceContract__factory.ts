/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CallPriceContract,
  CallPriceContractInterface,
} from "../CallPriceContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPriceOracleWrapper",
        name: "_priceOracleWrapperAddress",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "NewOracle",
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
        internalType: "uint256",
        name: "_usdPrice",
        type: "uint256",
      },
    ],
    name: "calculatePrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceOracleAddress",
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
        internalType: "contract IPriceOracleWrapper",
        name: "_priceOracleWrapperAddress",
        type: "address",
      },
    ],
    name: "setPriceOracle",
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
  "0x608060405234801561001057600080fd5b50604051610b1f380380610b1f833981810160405281019061003291906101db565b61004e6100436100fa60201b60201c565b61010260201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fb3eacd0e351fafdfefdec84e1cd19679b38dbcd63ea7c2c24da17fd2bc3b3c0e60405160405180910390a25061025f565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506101d581610248565b92915050565b6000602082840312156101ed57600080fd5b60006101fb848285016101c6565b91505092915050565b600061020f82610228565b9050919050565b600061022182610204565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b61025181610216565b811461025c57600080fd5b50565b6108b18061026e6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063530e784f14610067578063715018a6146100835780638b5350cc1461008d5780638da5cb5b146100ab578063ae104265146100c9578063f2fde38b146100f9575b600080fd5b610081600480360381019061007c919061060a565b610115565b005b61008b61023a565b005b6100956102c2565b6040516100a291906106e9565b60405180910390f35b6100b36102ec565b6040516100c091906106e9565b60405180910390f35b6100e360048036038101906100de9190610633565b610315565b6040516100f09190610744565b60405180910390f35b610113600480360381019061010e91906105e1565b6103c9565b005b61011d6104c1565b73ffffffffffffffffffffffffffffffffffffffff1661013b6102ec565b73ffffffffffffffffffffffffffffffffffffffff1614610191576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018890610724565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fb3eacd0e351fafdfefdec84e1cd19679b38dbcd63ea7c2c24da17fd2bc3b3c0e60405160405180910390a250565b6102426104c1565b73ffffffffffffffffffffffffffffffffffffffff166102606102ec565b73ffffffffffffffffffffffffffffffffffffffff16146102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad90610724565b60405180910390fd5b6102c060006104c9565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663e7572230836040518263ffffffff1660e01b81526004016103729190610744565b60206040518083038186803b15801561038a57600080fd5b505afa15801561039e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c2919061065c565b9050919050565b6103d16104c1565b73ffffffffffffffffffffffffffffffffffffffff166103ef6102ec565b73ffffffffffffffffffffffffffffffffffffffff1614610445576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043c90610724565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ac90610704565b60405180910390fd5b6104be816104c9565b50565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008135905061059c81610836565b92915050565b6000813590506105b18161084d565b92915050565b6000813590506105c681610864565b92915050565b6000815190506105db81610864565b92915050565b6000602082840312156105f357600080fd5b60006106018482850161058d565b91505092915050565b60006020828403121561061c57600080fd5b600061062a848285016105a2565b91505092915050565b60006020828403121561064557600080fd5b6000610653848285016105b7565b91505092915050565b60006020828403121561066e57600080fd5b600061067c848285016105cc565b91505092915050565b61068e81610770565b82525050565b60006106a160268361075f565b91506106ac826107be565b604082019050919050565b60006106c460208361075f565b91506106cf8261080d565b602082019050919050565b6106e3816107b4565b82525050565b60006020820190506106fe6000830184610685565b92915050565b6000602082019050818103600083015261071d81610694565b9050919050565b6000602082019050818103600083015261073d816106b7565b9050919050565b600060208201905061075960008301846106da565b92915050565b600082825260208201905092915050565b600061077b82610794565b9050919050565b600061078d82610770565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b61083f81610770565b811461084a57600080fd5b50565b61085681610782565b811461086157600080fd5b50565b61086d816107b4565b811461087857600080fd5b5056fea2646970667358221220f7d63f57c54cb93c076c4906f03cdfb7508495332adcb4133096ee61cfb62d1e64736f6c63430008040033";

export class CallPriceContract__factory extends ContractFactory {
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
    _priceOracleWrapperAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CallPriceContract> {
    return super.deploy(
      _priceOracleWrapperAddress,
      overrides || {}
    ) as Promise<CallPriceContract>;
  }
  getDeployTransaction(
    _priceOracleWrapperAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _priceOracleWrapperAddress,
      overrides || {}
    );
  }
  attach(address: string): CallPriceContract {
    return super.attach(address) as CallPriceContract;
  }
  connect(signer: Signer): CallPriceContract__factory {
    return super.connect(signer) as CallPriceContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallPriceContractInterface {
    return new utils.Interface(_abi) as CallPriceContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallPriceContract {
    return new Contract(address, _abi, signerOrProvider) as CallPriceContract;
  }
}
