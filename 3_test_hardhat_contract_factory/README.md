# Contract Factory
- using `hardhat-spdx-license-identifier` to add license to all smart contract. license is specified in package.json
- deploy contract from another contract using CREATE. new ContractSpawn
- testing deploying contract in test with constructor
- created utilty to convert bytes32 string to address string
- get the address from emitted event of the factory, attach the addrss to a contract instance and check initial value
- increment and decrement contract spawn correctly