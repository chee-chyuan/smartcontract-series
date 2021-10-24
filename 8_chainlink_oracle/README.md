# implementing price oracle
- added @defi-wonderland/smock for mock contract testing

chainlink eth/usd rinkeby contract
https://rinkeby.etherscan.io/address/0x8A753747A1Fa494EC906cE90E9f37563A8AF630e

example of how ens does it
https://etherscan.io/address/0x63faf46dadc9676745836289404b39136622b821


tbd:
should i pass in contract address as (address price) or as (PriceOracle price). the latter is what ens is doing. i think the latter saves gas for user when making a tx. 

strategy
1. create a wrapper oracle contract that is called by factory
2. factory is able to pass in price to the wrapper oracle which returns an eth value
3. how is the price determined? in the final stage, it is set by the owner of the contrat and each nft proxies can have different price. tbd, stored in nft proxy or store as a map in the factory
4. wrapper oracle points to chainlink oracle and perform calculation (eg. chainlink eth/usd * price that owner sets)

5. (top view)for now, user input price to function, returns eth value

todo - implement fallback oracle (maybe uniswap v3, can be done later stage by changing the wrapper oracle implementation next time), check if maker can be implemented similarly as chainlink