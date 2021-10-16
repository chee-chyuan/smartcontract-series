# trying out a simple nft
- successfully used typing in hardhat for typescript
- `npm install --save-dev typechain @typechain/hardhat @typechain/ethers-v5
- add config in ts.config, hardhard.config.ts, and npx hardhat clean to clean if it doesnt work
- used openzeppelin's erc721 to create and test a simple nft implementation `test-nft-zeppeling-test.ts`

-created `CumtomNft.sol` that has totalsupply, remaining, incremented counter while relying on OpenZeppelin's contract and counter library
- Test Mint function and test emit is emitted, and tokenId incremented
- Check owner and incremented current index
- Mint function will check if there are remaining supply before minting
