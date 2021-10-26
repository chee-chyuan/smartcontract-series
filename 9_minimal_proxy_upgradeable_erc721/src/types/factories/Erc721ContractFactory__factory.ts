/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Erc721ContractFactory,
  Erc721ContractFactoryInterface,
} from "../Erc721ContractFactory";

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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_cloneAddressIds",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_cloneAddresses",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_cloneExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_pausedList",
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
    name: "_tokenIdCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_unpausedList",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_cloneAddress",
        type: "address",
      },
    ],
    name: "consumeNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
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
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_cloneAddress",
        type: "address",
      },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "totalPaused",
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
    name: "totalUnpaused",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "transferEth",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_cloneAddress",
        type: "address",
      },
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ef838038062001ef8833981810160405281019062000037919062000182565b620000576200004b6200009f60201b60201c565b620000a760201b60201c565b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620001fc565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000815190506200017c81620001e2565b92915050565b6000602082840312156200019557600080fd5b6000620001a5848285016200016b565b91505092915050565b6000620001bb82620001c2565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001ed81620001ae565b8114620001f957600080fd5b50565b611cec806200020c6000396000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c80636a627842116100ad57806384c4bd4b1161007157806384c4bd4b146102f15780638da5cb5b1461030f578063cfaa33cf1461032d578063d784d4261461035d578063f2fde38b1461037957610120565b80636a6278421461024f578063715018a61461026b5780637367d9e01461027557806376a67a51146102a5578063806eb5ec146102c157610120565b8063466b724a116100f4578063466b724a146101ad57806349f9c0e4146101dd5780634d2ac380146101f957806357b001f9146102155780635c60da1b1461023157610120565b8062eea8a21461012557806315347be414610143578063175453e0146101735780632bf7dcc41461018f575b600080fd5b61012d610395565b60405161013a9190611922565b60405180910390f35b61015d60048036038101906101589190611602565b61039b565b60405161016a91906117e7565b60405180910390f35b61018d60048036038101906101889190611583565b6103ce565b005b61019761060a565b6040516101a49190611922565b60405180910390f35b6101c760048036038101906101c29190611602565b610610565b6040516101d49190611922565b60405180910390f35b6101f760048036038101906101f2919061162b565b610634565b005b610213600480360381019061020e919061162b565b6106b4565b005b61022f600480360381019061022a919061155a565b610734565b005b6102396108ec565b60405161024691906117e7565b60405180910390f35b6102696004803603810190610264919061155a565b610912565b005b610273610915565b005b61028f600480360381019061028a919061155a565b61099d565b60405161029c9190611802565b60405180910390f35b6102bf60048036038101906102ba919061155a565b6109bd565b005b6102db60048036038101906102d69190611602565b610b75565b6040516102e89190611922565b60405180910390f35b6102f9610b99565b6040516103069190611922565b60405180910390f35b610317610ba5565b60405161032491906117e7565b60405180910390f35b6103476004803603810190610342919061155a565b610bce565b6040516103549190611922565b60405180910390f35b6103776004803603810190610372919061155a565b610be6565b005b610393600480360381019061038e919061155a565b610ca6565b005b60055481565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103d6610d9e565b73ffffffffffffffffffffffffffffffffffffffff166103f4610ba5565b73ffffffffffffffffffffffffffffffffffffffff161461044a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610441906118c2565b60405180910390fd5b6000610477600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610da6565b905060008173ffffffffffffffffffffffffffffffffffffffff168585856040516024016104a79392919061181d565b6040516020818303038152906040527fb119490e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161053191906117d0565b6000604051808303816000865af19150503d806000811461056e576040519150601f19603f3d011682016040523d82523d6000602084013e610573565b606091505b50509050806105b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ae90611902565b60405180910390fd5b6105c082610e7b565b8173ffffffffffffffffffffffffffffffffffffffff167f532e33e26b328a15d92390fcf2bc515e3670105ea3a848159f326131fdca55c560405160405180910390a25050505050565b60065481565b600a818154811061062057600080fd5b906000526020600020016000915090505481565b61063c610d9e565b73ffffffffffffffffffffffffffffffffffffffff1661065a610ba5565b73ffffffffffffffffffffffffffffffffffffffff16146106b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a7906118c2565b60405180910390fd5b5050565b6106bc610d9e565b73ffffffffffffffffffffffffffffffffffffffff166106da610ba5565b73ffffffffffffffffffffffffffffffffffffffff1614610730576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610727906118c2565b60405180910390fd5b5050565b61073c610d9e565b73ffffffffffffffffffffffffffffffffffffffff1661075a610ba5565b73ffffffffffffffffffffffffffffffffffffffff16146107b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a7906118c2565b60405180910390fd5b6107b981610fb2565b60008173ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527f3f4ba83a000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505060405161086291906117d0565b6000604051808303816000865af19150503d806000811461089f576040519150601f19603f3d011682016040523d82523d6000602084013e6108a4565b606091505b50509050806108e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108df90611882565b60405180910390fd5b5050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b61091d610d9e565b73ffffffffffffffffffffffffffffffffffffffff1661093b610ba5565b73ffffffffffffffffffffffffffffffffffffffff1614610991576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610988906118c2565b60405180910390fd5b61099b600061100c565b565b60046020528060005260406000206000915054906101000a900460ff1681565b6109c5610d9e565b73ffffffffffffffffffffffffffffffffffffffff166109e3610ba5565b73ffffffffffffffffffffffffffffffffffffffff1614610a39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a30906118c2565b60405180910390fd5b610a42816110d0565b60008173ffffffffffffffffffffffffffffffffffffffff166040516024016040516020818303038152906040527f8456cb59000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051610aeb91906117d0565b6000604051808303816000865af19150503d8060008114610b28576040519150601f19603f3d011682016040523d82523d6000602084013e610b2d565b606091505b5050905080610b71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b68906118e2565b60405180910390fd5b5050565b60098181548110610b8557600080fd5b906000526020600020016000915090505481565b60018060000154905081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60036020528060005260406000206000915090505481565b610bee610d9e565b73ffffffffffffffffffffffffffffffffffffffff16610c0c610ba5565b73ffffffffffffffffffffffffffffffffffffffff1614610c62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c59906118c2565b60405180910390fd5b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610cae610d9e565b73ffffffffffffffffffffffffffffffffffffffff16610ccc610ba5565b73ffffffffffffffffffffffffffffffffffffffff1614610d22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d19906118c2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d92576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8990611862565b60405180910390fd5b610d9b8161100c565b50565b600033905090565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0915050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610e76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6d906118a2565b60405180910390fd5b919050565b60066000815480929190610e8e90611ab4565b91905055508060026000610ea2600161112a565b815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ef8600161112a565b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610fa5610fa0600161112a565b611138565b610faf6001611181565b50565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050610fff81611138565b61100881611197565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905061111d8161130b565b61112681611354565b5050565b600081600001549050919050565b600a805490506008600083815260200190815260200160002081905550600a81908060018154018082558091505060019003906000526020600020016000909190919091505550565b6001816000016000828254019250508190555050565b60006001600a805490506111ab91906119c5565b90506000600860008481526020019081526020016000205490506000600a8381548110611201577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905080600a8381548110611249577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020018190555083600a8481548110611292577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055506008600085815260200190815260200160002060009055600a8054806112ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b6009805490506007600083815260200190815260200160002081905550600981908060018154018082558091505060019003906000526020600020016000909190919091505550565b6000600160098054905061136891906119c5565b90506000600760008481526020019081526020016000205490506000600983815481106113be577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906000526020600020015490508060098381548110611406577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200181905550836009848154811061144f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055506008600085815260200190815260200160002060009055600a8054806114ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b60006114db6114d684611962565b61193d565b9050828152602081018484840111156114f357600080fd5b6114fe848285611a41565b509392505050565b60008135905061151581611c88565b92915050565b600082601f83011261152c57600080fd5b813561153c8482602086016114c8565b91505092915050565b60008135905061155481611c9f565b92915050565b60006020828403121561156c57600080fd5b600061157a84828501611506565b91505092915050565b60008060006060848603121561159857600080fd5b600084013567ffffffffffffffff8111156115b257600080fd5b6115be8682870161151b565b935050602084013567ffffffffffffffff8111156115db57600080fd5b6115e78682870161151b565b92505060406115f886828701611545565b9150509250925092565b60006020828403121561161457600080fd5b600061162284828501611545565b91505092915050565b6000806040838503121561163e57600080fd5b600061164c85828601611545565b925050602061165d85828601611506565b9150509250929050565b611670816119f9565b82525050565b61167f81611a0b565b82525050565b600061169082611993565b61169a81856119a9565b93506116aa818560208601611a50565b80840191505092915050565b60006116c18261199e565b6116cb81856119b4565b93506116db818560208601611a50565b6116e481611b5b565b840191505092915050565b60006116fc6026836119b4565b915061170782611b6c565b604082019050919050565b600061171f6017836119b4565b915061172a82611bbb565b602082019050919050565b60006117426016836119b4565b915061174d82611be4565b602082019050919050565b60006117656020836119b4565b915061177082611c0d565b602082019050919050565b60006117886015836119b4565b915061179382611c36565b602082019050919050565b60006117ab6015836119b4565b91506117b682611c5f565b602082019050919050565b6117ca81611a37565b82525050565b60006117dc8284611685565b915081905092915050565b60006020820190506117fc6000830184611667565b92915050565b60006020820190506118176000830184611676565b92915050565b6000606082019050818103600083015261183781866116b6565b9050818103602083015261184b81856116b6565b905061185a60408301846117c1565b949350505050565b6000602082019050818103600083015261187b816116ef565b9050919050565b6000602082019050818103600083015261189b81611712565b9050919050565b600060208201905081810360008301526118bb81611735565b9050919050565b600060208201905081810360008301526118db81611758565b9050919050565b600060208201905081810360008301526118fb8161177b565b9050919050565b6000602082019050818103600083015261191b8161179e565b9050919050565b600060208201905061193760008301846117c1565b92915050565b6000611947611958565b90506119538282611a83565b919050565b6000604051905090565b600067ffffffffffffffff82111561197d5761197c611b2c565b5b61198682611b5b565b9050602081019050919050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006119d082611a37565b91506119db83611a37565b9250828210156119ee576119ed611afd565b5b828203905092915050565b6000611a0482611a17565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611a6e578082015181840152602081019050611a53565b83811115611a7d576000848401525b50505050565b611a8c82611b5b565b810181811067ffffffffffffffff82111715611aab57611aaa611b2c565b5b80604052505050565b6000611abf82611a37565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611af257611af1611afd565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f756e706175736520697320756e7375636365737366756c000000000000000000600082015250565b7f455243313136373a20637265617465206661696c656400000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f706175736520697320756e7375636365737366756c0000000000000000000000600082015250565b7f636c6f6e6520697320756e7375636365737366756c0000000000000000000000600082015250565b611c91816119f9565b8114611c9c57600080fd5b50565b611ca881611a37565b8114611cb357600080fd5b5056fea2646970667358221220bf1e4a807e6fe91c7d7218a4f69c06c065dba8ec970673e5bead4d595951fb0f64736f6c63430008040033";

export class Erc721ContractFactory__factory extends ContractFactory {
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
  ): Promise<Erc721ContractFactory> {
    return super.deploy(
      _implementation,
      overrides || {}
    ) as Promise<Erc721ContractFactory>;
  }
  getDeployTransaction(
    _implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_implementation, overrides || {});
  }
  attach(address: string): Erc721ContractFactory {
    return super.attach(address) as Erc721ContractFactory;
  }
  connect(signer: Signer): Erc721ContractFactory__factory {
    return super.connect(signer) as Erc721ContractFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Erc721ContractFactoryInterface {
    return new utils.Interface(_abi) as Erc721ContractFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Erc721ContractFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Erc721ContractFactory;
  }
}
