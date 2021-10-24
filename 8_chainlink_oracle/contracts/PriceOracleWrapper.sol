// SPDX-License-Identifier: unlicensed

pragma solidity ^0.8.4;

import "./IPriceOracleWrapper.sol";
import "./IExternalOracle.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

///contract wrapper that wraps the external oracle e.g. chainlink oracle
/// for eth-usd pair used only
contract PriceOracleWrapper is IPriceOracleWrapper, Ownable {
    IExternalOracle externalOracle;
    int256 public oracleDecimalPlaces;
    int256 public usdDecimalPlaces;

    event NewExternalOracle(address indexed addr);
    event SetOracleDecimalPlaces(int256 indexed dp);
    event SetUsdDecimalPlaces(int256 indexed dp);

    constructor(
        IExternalOracle _externalOracle,
        int256 _oracleDecimalPlaces,
        int256 _usdDecimalPlaces
    ) {
        externalOracle = _externalOracle;
        oracleDecimalPlaces = _oracleDecimalPlaces;
        usdDecimalPlaces = _usdDecimalPlaces;
        emit SetOracleDecimalPlaces(oracleDecimalPlaces);
        emit SetUsdDecimalPlaces(usdDecimalPlaces);
        emit NewExternalOracle(address(externalOracle));
    }

    function setExternalOracle(IExternalOracle _externalOracle)
        public
        onlyOwner
    {
        externalOracle = _externalOracle;
        emit NewExternalOracle(address(externalOracle));
    }

    function setOracleDecimalPlaces(int256 _dp) public onlyOwner {
        oracleDecimalPlaces = _dp;
        emit SetOracleDecimalPlaces(oracleDecimalPlaces);
    }

    function setUsdDecimalPlaces(int256 _dp) public onlyOwner {
        usdDecimalPlaces = _dp;
        emit SetUsdDecimalPlaces(usdDecimalPlaces);
    }

    function getExternalOracle() public view returns (address) {
        return address(externalOracle);
    }

    /// calculate the eth value givin price in usd
    /// @param _usdPrice price in usd in 8 decimal places. eg 5usd -> 5000000
    /// @dev i will need to confirm formula is correct and free from overflows and bugs
    /// @return eth value in 18 decimal places
    function getPrice(uint256 _usdPrice)
        public
        view
        override
        returns (uint256)
    {
        int256 dpMultiplier = usdDecimalPlaces - oracleDecimalPlaces + 18;
        require(dpMultiplier > 0);

        //usdPrice/(oracle data)
        int256 latestAnswer = externalOracle.latestAnswer();
        uint256 priceInWei = (_usdPrice / uint256(latestAnswer)) *
            10**uint256(dpMultiplier);

        return priceInWei;
    }
}
