// SPDX-License-Identifier: unlicensed

pragma solidity ^0.8.4;

interface IPriceOracleWrapper {
    ///@param usdPrice usd price in 8dp
    ///@return eth price in 18dp
    function getPrice(uint256 usdPrice) external view returns(uint256);
}