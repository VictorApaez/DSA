const LinkedList = require("../LinkedListClass.js");

let myList = new LinkedList(1, 23);
console.log(myList);

var middleNode = function (head) {
  let count = 0;
  currNode = head;
  while (currNode) {
    currNode = currNode.next;
    count++;
  }
};
