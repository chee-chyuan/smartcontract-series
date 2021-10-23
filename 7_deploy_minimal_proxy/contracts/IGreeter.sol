// SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.4;

//used for initialization only
interface IGreeter {
    function initialize (string memory _greeting) external;
}