const { LinkedList } = require("./LinkedListClass");
const middleNode = require("./leet-code/middleNode");
const reverseList = require("./leet-code/reverseList");
const deleteSortedDuplicates = require("./leet-code/deleteSortedDuplicates");
const isPalindrome = require("./leet-code/isPalindrome");
isPalindrome;

LinkedList.prototype.reverseList = reverseList;
LinkedList.prototype.middleNode = middleNode;
LinkedList.prototype.deleteSortedDuplicates = deleteSortedDuplicates;
LinkedList.prototype.isPalindrome = isPalindrome;

module.exports = LinkedList;
