const middleNode = require("./leet-code/middleNode");
const { LinkedList } = require("./LinkedListClass");
const reverseList = require("./leet-code/reverseList");
const deleteSortedDuplicates = require("./leet-code/deleteSortedDuplicates");

LinkedList.prototype.reverseList = reverseList;
LinkedList.prototype.middleNode = middleNode;
LinkedList.prototype.deleteSortedDuplicates = deleteSortedDuplicates;

module.exports = LinkedList;
