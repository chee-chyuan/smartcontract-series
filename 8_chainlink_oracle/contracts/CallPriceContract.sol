pragma solidity ^0.8.4;

import "./IPriceOracleWrapper.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CallPriceContract is Ownable {
    IPriceOracleWrapper priceOracleWrapper;

    event NewOracle(address indexed addr);

    constructor(IPriceOracleWrapper _priceOracleWrapperAddress) {
        priceOracleWrapper = _priceOracleWrapperAddress;
        emit NewOracle(address(priceOracleWrapper));
    }

    function setPriceOracle(IPriceOracleWrapper _priceOracleWrapperAddress)
        public onlyOwner
    {
        priceOracleWrapper = _priceOracleWrapperAddress;
        emit NewOracle(address(priceOracleWrapper));
    }

    function getPriceOracleAddress() public view returns(address) {
        return address(priceOracleWrapper);
    }

    function calculatePrice(uint256 _usdPrice) public view returns(uint256) {
        return priceOracleWrapper.getPrice(_usdPrice);
    }

}
