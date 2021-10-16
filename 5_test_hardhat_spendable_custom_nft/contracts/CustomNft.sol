// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CustomNft is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint256 public totalSupply;
    uint256 public remainingSupply;
    mapping(uint256 => bool) public isSpendRecords;

    event ConsumedNft(address indexed consumer, uint256 indexed tokenId);

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) ERC721(_name, _symbol) {
        totalSupply = _totalSupply;
        remainingSupply = _totalSupply;
    }

    modifier isUnspent(uint256 _tokenId) {
        require(!isSpendRecords[_tokenId], "This token has been spend");
        _;
    }

    function Mint(address _to) public {
        require(remainingSupply > 0, "No more supply");
        remainingSupply--;

        _safeMint(_to, _tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    /// only owner can consume the nft
    function ConsumeNft(uint256 _tokenId) public onlyOwner isUnspent(_tokenId) {
        isSpendRecords[_tokenId] = true;
        emit ConsumedNft(msg.sender, _tokenId);
    }

    function GetTokenInfo(uint256 _tokenId) public view returns(uint256 tokenId_, bool isSpent_){
        return (_tokenId, isSpendRecords[_tokenId]);
    }

    function GetCurrentTokenId() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
}
