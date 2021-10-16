//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TestContract {
    uint256 public currentValue;

    constructor(uint256 _init) {
        currentValue = _init;
    }

    function get() public view returns(uint256){
        return currentValue;
    }

    function increment() public {
        console.log("hello");
        currentValue++;
    }

    function decrement() public {
        currentValue--;
    }
}