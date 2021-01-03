pragma solidity >=0.5.0 <0.8.0;
contract Inbox {

    string public msg;
    
    constructor(string memory x) {
        msg=x;
    }

    function setMessage(string memory x) public {
        msg=x;
    }
}


