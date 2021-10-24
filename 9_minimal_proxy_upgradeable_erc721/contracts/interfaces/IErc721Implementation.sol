// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.4;

/// functions that the contract factory needs to use
interface IErc721Implementation {
    function initialize(
        string memory _name,
        string memory _symbol,
        uint256 _maxSupply
    ) external;

    function mint(address _to) external;

    function consumeNft(uint256 _tokenId) external;

    function pause() external;

    function unpause() external;
}
