// SPDX-License-Identifier: Unlicensed



import "@openzeppelin/contracts/utils/Counters.sol";

pragma solidity ^0.8.4;

contract ContractFactoryStorage {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIdCounter;

    struct ProxyDetail {
        string Name;
        string Symbol;
        string Description;
        string Uri;
    }

    //mapping countid to cloneaddress
    mapping(uint256 => address) public _cloneAddresses;
    mapping(address => uint256) public _cloneAddressIds;
    //map to bool true if clone exist
    mapping(address => bool) public _cloneExists;
    //not storing price in struct because ProxyDetail is used mainly for viewing only,
    //save gas 
    mapping(address => uint256) public _prices;
    mapping(address => ProxyDetail) public _proxyDetails;

    //mapping on countId to index of clone in paused/unpaused list
    mapping(uint256 => uint256) public _pausedCloneIndex;
    mapping(uint256 => uint256) public _unpausedCloneIndex;

    uint256[] public _pausedList; //index to countId
    uint256[] public _unpausedList;

    constructor() {
        //tokenId shall start from 1
        //reason: _cloneAddressIds if its mapped to 0, we will not know if its a valid entry or not
        //default is 0
        _tokenIdCounter.increment();
    }

    function _beforePaused(address _cloneAddress) internal {
        uint256 countId = _cloneAddressIds[_cloneAddress];
        _addPaused(countId);
        _removeUnpaused(countId);
    }

    function _beforeUnpaused(address _cloneAddress) internal {
        uint256 countId = _cloneAddressIds[_cloneAddress];
        _addUnpaused(countId);
        _removePaused(countId);
    }

    function _afterCreateClone(address _cloneAddress) internal {
        //TODO create struct containing the token info, eg. name, price

        //add mappings
        _cloneAddresses[_tokenIdCounter.current()] = _cloneAddress;
        _cloneAddressIds[_cloneAddress] = _tokenIdCounter.current();
        _cloneExists[_cloneAddress] = true;

        _addUnpaused(_tokenIdCounter.current());

        _tokenIdCounter.increment();
    }

    function _addUnpaused(uint256 _countId) internal {
        _unpausedCloneIndex[_countId] = _unpausedList.length;
        _unpausedList.push(_countId);
    }

    function _addPaused(uint256 _countId) internal {
        _pausedCloneIndex[_countId] = _pausedList.length;
        _pausedList.push(_countId);
    }

    function _removeUnpaused(uint256 _countId) internal {
        uint256 lastIndex = _unpausedList.length -1;
        uint256 toReplaceToIndex = _unpausedCloneIndex[_countId];

        uint256 lastIndexValue = _unpausedList[lastIndex];

        _unpausedList[toReplaceToIndex] = lastIndexValue;
        _unpausedList[lastIndex] = _countId;

        delete _unpausedCloneIndex[_countId];
        _unpausedList.pop();
    }

    function _removePaused(uint256 _countId) internal {
        uint256 lastIndex = _pausedList.length -1;
        uint256 toReplaceToIndex = _pausedCloneIndex[_countId];

        uint256 lastIndexValue = _pausedList[lastIndex];

        _pausedList[toReplaceToIndex] = lastIndexValue;
        _pausedList[lastIndex] = _countId;

        delete _pausedCloneIndex[_countId];
        _pausedList.pop();
    }

    function totalUnpaused() public view returns(uint) {
        return _unpausedList.length;
    }

    function totalPaused() public view returns(uint) {
        return _pausedList.length;
    }
}
