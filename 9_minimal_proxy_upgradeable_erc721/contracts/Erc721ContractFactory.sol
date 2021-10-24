// SPDX-License-Identifier: Unlicensed



pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IErc721Implementation.sol";
import "./ContractFactoryStorage.sol";

contract Erc721ContractFactory is Ownable, ContractFactoryStorage {
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
        (bool success, ) = cloneAddress.call(
            abi.encodeWithSignature(
                "initialize(string,string,uint256)",
                _name,
                _symbol,
                _maxSupply
            )
        );

        require(success, "clone is unsuccessful");
        _afterCreateClone(cloneAddress);
        emit CreatedNewCloneContract(cloneAddress);
    }

    function mint(address _to) public {
        //check price
        //if ok we mint
    }

    /// for owner to consume the nft to exchange for goods. consumed nfts are consider spent
    /// @param _tokenId tokenid of the nft
    /// @param _cloneAddress clone address of the nft
    function consumeNft(uint256 _tokenId, address _cloneAddress) public onlyOwner {

    }

    function pause(address _cloneAddress) public onlyOwner {
        _beforePaused(_cloneAddress);

        //pause contract
        (bool success, ) = _cloneAddress.call(
            abi.encodeWithSignature("pause()")
        );

        require(success, "pause is unsuccessful");
    }

    function unpause(address _cloneAddress) public onlyOwner {
        _beforeUnpaused(_cloneAddress);

        //unpause contract
        (bool success, ) = _cloneAddress.call(
            abi.encodeWithSignature("unpause()")
        );

        require(success, "unpause is unsuccessful");
    }

    function setImplementation(address _implementation) public onlyOwner {
        implementation = _implementation;
    }

    ///transfer eth from this account to address
    /// @param _value value to be transferred in wei
    /// @param _recipient recipient address
    function transferEth(uint256 _value, address _recipient) public onlyOwner {
    }
}
