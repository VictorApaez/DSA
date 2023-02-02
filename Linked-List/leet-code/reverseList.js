const { LinkedList } = require("../LinkedListClass.js");

LinkedList.prototype.reverseList = function () {
  let prev = null;
  while (this.head) {
    const next = this.head.next;
    this.head.next = prev;
    prev = this.head;
    this.head = next;
  }
  this.head = prev;
  return this;
};

// let testing = new LinkedList(1, 2, 3);
// let result = testing.reverseList();
// console.log(result);
