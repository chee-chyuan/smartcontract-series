// SPDX-License-Identifier: Unlicense

//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./IGreeter.sol";

contract Greeter is IGreeter {
    string private greeting;
    bool private _initialized;

    modifier isNotInitialized() {
        require(!_initialized);
        _;
    }

    function initialize(string memory _greeting) public override isNotInitialized {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        _initialized = true;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
