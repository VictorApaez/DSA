const middleNode = require("./leet-code/middleNode");
const { LinkedList } = require("./LinkedListClass");
const reverseList = require("./leet-code/reverseList");

LinkedList.prototype.reverseList = reverseList;
LinkedList.prototype.middleNode = middleNode;

module.exports = LinkedList;
