const LinkedList = require("../LinkedListClass.js");

var middleNode = function (head) {
  let count = 0;
  currNode = head;
  while (currNode) {
    currNode = currNode.next;
    count++;
  }
  count = Math.floor(count / 2);
  while (count > 0) {
    head = head.next;
    count--;
  }
  return head;
};

let testList = new LinkedList(1, 2, 3, 4, 6); // Output: [3,4,5]
console.log(middleNode(testList.head));

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
