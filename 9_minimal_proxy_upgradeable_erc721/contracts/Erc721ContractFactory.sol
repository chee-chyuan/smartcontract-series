pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IErc721Implementation.sol";

contract Erc721ContractFactory is Ownable {
    address public implementation;

    event CreatedNewCloneContract(address indexed contractAddress);

    constructor(address _implementation) {
        implementation = _implementation;
    }

    function createClone(
        string memory _name,
        string memory _symbol,
        uint256 _maxSupply
    ) public onlyOwner {
        //clone
        address cloneAddress = Clones.clone(implementation);
        //initialize
        IErc721Implementation(cloneAddress).initialize(_name, _symbol, _maxSupply);
        emit CreatedNewCloneContract(cloneAddress);
    }

    function mint(address _to) public {
        //check price
        //if ok we mint

        
    }

    function setImplementation(address _implementation) public onlyOwner {
        implementation = _implementation;
    }
}
