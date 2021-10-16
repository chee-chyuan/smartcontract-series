// SPDX-License-Identifier: UNLICENSED



pragma solidity ^0.8.4;

import "./ContractSpawn.sol";

contract ContractFactory {
    address public owner;
    event NewContract(address adr);
    constructor(address _owner) {
        //owner = msg.sender;
        owner = _owner;
    }

    // function testDeploy(uint256 _someNumber) public (address adr) {
    //     bytes32 salt = keccak256(abi.encodePacked(_someNumber));        
    //     bytes memory bytecode = type(ContractSpawn).creationCode;

    //     assembly {
    //         adr := create2(0, add(bytecode, 32), mload(bytecode), salt)
    //     }
    // }

    function testDeployCreate() public returns(address) {
        ContractSpawn spawn = new ContractSpawn(5);

        address adr = address(spawn);
        emit NewContract(adr);
        return adr;
    }
}
