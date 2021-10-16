// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CustomNft is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 public totalSupply;
    uint256 public remainingSupply;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) ERC721(_name, _symbol) {
        totalSupply = _totalSupply;
        remainingSupply = _totalSupply;
    }

    function Mint(address _to) public {
        require(remainingSupply > 0, "No more supply");
        remainingSupply--;

        _safeMint(_to, _tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    function GetCurrentTokenId() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
}
