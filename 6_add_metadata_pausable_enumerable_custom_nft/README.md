# Adding more properties to project 5
- retain isSpent functionality
- added hardcoded tokenuri, for now all tokenId will return the same svg. to be changed in the future
- changed to use `maxSupply` instead of totalSupply because OpenZeppelin uses totalSupply in Erc721Enumerable
- remove `remainingSupply` and change requirement to `require(maxSupply - _tokenIdCounter.current() > 0, "No more supply")`. I think it saved abit of gas as we have one less state to change 
- verifying contract on etherscan with multi param constructor `npx hardhat verify --constructor-args .\scripts\arguments.ts 0x45a44F94FcB1b79B5634bd125e4722A71248a91a --network rinkeby` . a script is created in `arguments.ts`
- sample rinkey etherscan address `https://rinkeby.etherscan.io/address/0x45a44F94FcB1b79B5634bd125e4722A71248a91a#code`

-note: changed to `0xFD2e865C4AF44eA6238Dca1eDd658835053c1558`. the previous contract missed out the json application type in the `tokenUri` function. 
https://rinkeby.etherscan.io/address/0xFD2e865C4AF44eA6238Dca1eDd658835053c1558#code

- added openzeppelin's pausable function to disallow minting when contract is paused, able to transfer
- added test case for paused mint failure and unpause mint successful