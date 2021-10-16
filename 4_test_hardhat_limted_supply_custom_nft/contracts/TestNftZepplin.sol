// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestNftZeppelin is ERC721 {
    constructor() ERC721("MyCollectible", "MCO") {
    }
}