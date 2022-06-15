// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    // function with parameters
    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    // type | variable
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }
    // array of TransferStructs
    TransferStruct[] transactions;

    function addToBlockchain() public {}

    function getOldTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        // return transactions
    }

    function getTransactionCount() public view returns (uint256) {
        // return transactionCount
    }
}
