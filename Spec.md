# Merchant Dapp with NFT
Dapp that allows a merchant(owner) to create multiple items as nft.
Price of each item is configurable and paid in Eth (native tokens) using price oracles
Each item is an nft which can be spent. Only owner is able to consume the nft (consume will be equivalent to exchange nft for item. except that the nft will remain in the buyer's wallet for collection purposes)

Current there are 3 main contracts which will be deployed, which are:
1. Factory + Receiver Contract
2. Erc721 implementation contract
3. Minimal Proxy Contract that is deployed by the factory and points to the implementation contract

## Factory + Receiver + Master Contract
Contract that creates new items in the menu in the form of minimal proxy that points to the implementation
Also controls the buying of items by first checking the price against an oracle and calling an owner only mint function in the minial proxy nft contract

This contract will store all Eth and will need a function to transfer out the Eth

Will have functions to perform admin controls to each minimal proxy (i.e. pause, unpause, set supply, change supply)
will also have the mapping to each items

### contract method
WIP

## Minimal proxy
delegates the call from the master contract to the implementation

## Erc721 implementation contract
Has owner, pause feature, stores, totalsupply, remaining supply, hasSpent, and metadata

### WIP
A way to retrive items of buyers more efficiently