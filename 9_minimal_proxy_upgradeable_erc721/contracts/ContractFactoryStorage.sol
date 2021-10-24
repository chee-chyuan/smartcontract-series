// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.4;

contract ContractFactoryStorage {
    //mapping countid to cloneaddress
    mapping(uint256 => address) private _cloneAddresses;
    //map to bool true if clone exist
    mapping(address => bool) private _cloneExist;

    uint256 public totalPaused;
    uint256 public totalUnpaused;

    //mapping on countId to index of clone in paused/unpaused list
    mapping(uint256 => uint256) private _pausedCloneIndex;
    mapping(uint256 => uint256) private _unpausedCloneIndex;

    //mapping of index to clone address in list
    mapping(uint256 => address) private _pausedList;
    mapping(uint256 => address) private _unpausedList;

    function _beforePaused(address _cloneAddress) internal {
        //TODO
    }

    function _beforeUnpaused(address _cloneAddress) internal {
        //TODO
    }
}
