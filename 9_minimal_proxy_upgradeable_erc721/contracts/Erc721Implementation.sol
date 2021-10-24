pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import {Base64} from "./libraries/Base64.sol";

///the owner is the contract factory
contract Erc721Implementation is
    Initializable,
    ERC721Upgradeable,
    ERC721EnumerableUpgradeable,
    PausableUpgradeable,
    OwnableUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;
    CountersUpgradeable.Counter private _tokenIdCounter;

    mapping(uint256 => bool) public isSpendRecords;
    uint256 public maxSupply;

    //hardcoded svg
    string baseSvg =
        "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>This is an nft</text></svg>";

    event ConsumedNft(address indexed consumer, uint256 indexed tokenId);

    constructor() initializer {}

    function initialize(
        string memory _name,
        string memory _symbol,
        uint256 _maxSupply
    ) public initializer {
        __ERC721_init(_name, _symbol);
        __ERC721Enumerable_init();
        __Pausable_init();
        __Ownable_init();
        maxSupply = _maxSupply;
    }

    modifier isUnspent(uint256 _tokenId) {
        require(!isSpendRecords[_tokenId], "This token has been spent");
        _;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    ///allow minting when contract is not paused by owner
    ///only is able to be called by owner(contract factory) after price checking is done on the contract factory side
    function mint(address _to) public onlyOwner whenNotPaused {
        require(maxSupply - _tokenIdCounter.current() > 0, "No more supply");

        _safeMint(_to, _tokenIdCounter.current());

        _tokenIdCounter.increment();
    }

    /// only owner can consume the nft
    function consumeNft(uint256 _tokenId) public onlyOwner isUnspent(_tokenId) {
        isSpendRecords[_tokenId] = true;
        emit ConsumedNft(msg.sender, _tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override
    {
        super._burn(tokenId);
    }

    ///for now all tokenIds return the same hardcoded svg
    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',
                        // We set the title of our NFT as the generated word.
                        "customNft",
                        '", "description": "test decription", "image": "data:image/svg+xml;base64,',
                        // We add data:image/svg+xml;base64 and then append our base64 encode our svg.
                        Base64.encode(bytes(baseSvg)),
                        '"}'
                    )
                )
            )
        );

        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        return finalTokenUri;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
