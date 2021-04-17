//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract CryptoPunkUrSelf is Ownable, ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address owner;

    constructor() ERC721("CryptoPunkUrself", "CPU") {
        owner = msg.sender;
        console.log("Deploying a Crypto Punk Urself ");
    }

    function awardItem(address user, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(user, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
