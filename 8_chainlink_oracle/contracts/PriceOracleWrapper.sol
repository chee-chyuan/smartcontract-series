pragma solidity ^0.8.4;

import "./IPriceOracleWrapper.sol";
import "./IExternalOracle.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

///contract wrapper that wraps the external oracle e.g. chainlink oracle
contract PriceOracleWrapper is IPriceOracleWrapper, Ownable {
    IExternalOracle externalOracle;

    event NewExternalOracle(address indexed addr);

    constructor(IExternalOracle _externalOracle) {
        externalOracle = _externalOracle;
        emit NewExternalOracle(address(externalOracle));
    }

    function setExternalOracle(IExternalOracle _externalOracle)
        public
        onlyOwner
    {
        externalOracle = _externalOracle;
        emit NewExternalOracle(address(externalOracle));
    }

    function getExternalOracle() public view returns (address) {
        return address(externalOracle);
    }

    /// calculate the eth value givin price in usd
    /// @param _usdPrice price in usd in 6 decimal places. eg 5usd -> 5000000
    /// @return eth value in 18 decimal places
    function getPrice(uint256 _usdPrice)
        public
        view
        override
        returns (uint256)
    {
        //calculation here TODO
    }
}
