// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

import "@fhenixprotocol/contracts/FHE.sol";
import {Permissioned, Permission} from "@fhenixprotocol/contracts/access/Permissioned.sol";

contract Counter is Permissioned {
    euint32 internal counter;
    address public owner;

    constructor() {
        owner = msg.sender;
        counter = FHE.asEuint32(1_000_000_000);
    }

    function add(inEuint32 calldata encryptedValue) public {
        euint32 value = FHE.asEuint32(encryptedValue);
        counter = counter + value;
    }

    function div(inEuint32 calldata encryptedValue) public {
        euint32 value = FHE.asEuint32(encryptedValue);
        counter = counter / value;
    }

    function divManyTimes(inEuint32 calldata encryptedValue) public {
        euint32 value = FHE.asEuint32(encryptedValue);
        counter = counter / value;
        counter = counter / value;
        counter = counter / value;
        counter = counter / value;
    }

    function getCounter() public view returns (uint256) {
        return FHE.decrypt(counter);
    }

    function getCounterPermit(Permission memory permission) public view onlySender(permission) returns (uint256) {
        return FHE.decrypt(counter);
    }

    function getCounterPermitSealed(Permission memory permission)
        public
        view
        onlySender(permission)
        returns (string memory)
    {
        return FHE.sealoutput(counter, permission.publicKey);
    }
}
