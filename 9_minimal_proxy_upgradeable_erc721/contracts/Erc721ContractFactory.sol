// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./interfaces/IErc721Implementation.sol";
import "./ContractFactoryStorage.sol";
import "./oracles/IPriceOracleWrapper.sol";

contract Erc721ContractFactory is Ownable, ContractFactoryStorage {
    address public implementation;
    IPriceOracleWrapper public priceOracleWrapper;

    event CreatedNewCloneContract(
        address indexed contractAddress,
        uint256 price
    );

    event NewImplementation(address indexed addr);
    event NewOracle(address indexed addr);

    error CloneDoesNotExist();
    error NotEnoughETH();

    constructor(
        address _implementation,
        IPriceOracleWrapper _priceOracleWrapperAddress
    ) {
        implementation = _implementation;
        priceOracleWrapper = _priceOracleWrapperAddress;

        emit NewImplementation(_implementation);
        emit NewOracle(address(_priceOracleWrapperAddress));
    }

    /// @param _price usd price in 8dp
    function createClone(
        string memory _name,
        string memory _symbol,
        uint256 _maxSupply,
        uint256 _price
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
        _prices[cloneAddress] = _price;

        //TODO: handle description and tokenUri
        _proxyDetails[cloneAddress] = ProxyDetail(_name, _symbol, "", "");
        emit CreatedNewCloneContract(cloneAddress, _price);
    }

    /// @dev user to pay in eth
    function mint(address _to, address _cloneAddress) public payable {
        if (!_cloneExists[_cloneAddress]) {
            revert CloneDoesNotExist();
        }

        //get price of item
        uint256 usdPrice = _prices[_cloneAddress];
        //get oracle price
        uint256 priceInEth = priceOracleWrapper.getPrice(usdPrice);

        //check is user has enough funds
        if (msg.value < priceInEth) {
            revert NotEnoughETH();
        }

        //TODO
        //mint
        IErc721Implementation(_cloneAddress).mint(_to);

        //return the change
        if (msg.value > priceInEth) {
            payable(msg.sender).transfer(msg.value - priceInEth);
        }
    }

    /// for owner to consume the nft to exchange for goods. consumed nfts are consider spent
    /// @param _tokenId tokenid of the nft
    /// @param _cloneAddress clone address of the nft
    function consumeNft(uint256 _tokenId, address _cloneAddress)
        public
        onlyOwner
    {
        (bool success, ) = _cloneAddress.call(
            abi.encodeWithSignature("consumeNft(uint256)", _tokenId)
        );

        require(success, "consumeNft is unsuccessful");
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
        emit NewImplementation(_implementation);
    }

    function setPriceOracle(IPriceOracleWrapper _priceOracleWrapperAddress)
        public
        onlyOwner
    {
        priceOracleWrapper = _priceOracleWrapperAddress;
        emit NewOracle(address(_priceOracleWrapperAddress));
    }

    function getPriceOracleAddress() public view returns (address) {
        return address(priceOracleWrapper);
    }

    ///transfer eth from this account to address
    /// @param _value value to be transferred in wei
    /// @param _recipient recipient address
    /// @dev it is the sender's responsibility to ensure that the funds is sent to the correct recipient, if it is a contract, make sure the contract has the ability to transfer funds out
    function transferEth(uint256 _value, address payable _recipient)
        public
        onlyOwner
    {
        require(
            address(this).balance >= _value,
            "contract does not have sufficient eth balance"
        );

        _recipient.transfer(_value);
    }
}
