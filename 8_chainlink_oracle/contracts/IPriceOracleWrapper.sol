// SPDX-License-Identifier: unlicensed

pragma solidity ^0.8.4;

interface IPriceOracleWrapper {
    function getPrice(uint256 usdPrice) external view returns(uint256);
}