# aim to create a factory that deploys minimal proxy
- using `@openzeppelin/contracts/proxy/Clones.sol"`
- created `IGreeter.sol` as an interface to be implemented on `Greeter.sol`
  only `initialize` function is of interest and will be used by `MinimalProxyFactory`
- take care to set `_initialized` to true

- Deployment flow:
    - Deploy Greeter, get address
    - deploy MinimalProxyFactory with Greeter address as the constructor

- we are able to call minimal proxy which will point its implementation to the Greeter contract
- when verify in etherscan, we can call `npx hardhat verify` seperately, once for Greeter.sol (implementation), once for MinimalProxyFactory.sol (factory). we just need to pass in the correct address, network and constructor params(for factory normally)

- example when createClone function is called https://rinkeby.etherscan.io/tx/0x69c9d4890616fea23b567942109fa8cbb57787beecc33712ed18124bf99db19e#eventlog

-wrote test script for creation of implementation and factory, deploy a clone, test initalized value and check to ensure that initialize function cannot be called again after the first call.