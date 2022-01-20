// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Inbox {
    string public message;

    constructor(string memory InitialMessage) {
        message = InitialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }

}