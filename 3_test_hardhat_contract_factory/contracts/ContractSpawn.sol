// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

contract ContractSpawn {
    uint256 initValue;

    constructor(uint256 _initValue) {
        initValue = _initValue;
    }

    function get() public view returns (uint256) {
        return initValue;
    }

    function increment() public {
        initValue++;
    }

    function decrement() public {
        initValue--;
    }
}
