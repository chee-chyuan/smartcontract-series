// SPDX-License-Identifier: unlicensed

pragma solidity ^0.8.4;

interface IExternalOracle {
    function latestAnswer() external view returns (int256);
}