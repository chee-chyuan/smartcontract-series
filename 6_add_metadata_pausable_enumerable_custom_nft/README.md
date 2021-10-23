# Adding more properties to project 5
- retain isSpent functionality
- added hardcoded tokenuri, for now all tokenId will return the same svg. to be changed in the future
- changed to use `maxSupply` instead of totalSupply because OpenZeppelin uses totalSupply in Erc721Enumerable
- remove `remainingSupply` and change requirement to `require(maxSupply - _tokenIdCounter.current() > 0, "No more supply")`. I think it saved abit of gas as we have one less state to change 