// SPDX-License-Identifier: Unlicense



pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./IGreeter.sol";

contract MinimalProxyFactory is Ownable {
    address public implementation;

    event CreatedNewCloneContract(address indexed contractAddress);

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function createClone(string memory _someText) public onlyOwner {
        //clone
        address cloneAddress = Clones.clone(implementation);
        //initialize
        IGreeter(cloneAddress).initialize(_someText);
        emit CreatedNewCloneContract(cloneAddress);
    }

    function setImplementation(address _implementation) public onlyOwner {
        implementation = _implementation;
    }
}
