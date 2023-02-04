function reverseList() {
  let prev = null;
  while (this.head) {
    const next = this.head.next;
    this.head.next = prev;
    prev = this.head;
    this.head = next;
  }
  this.head = prev;
  return this;
}

module.exports = reverseList;

// let testing = new LinkedList(1, 2, 3);
// let result = testing.reverseList();
// console.log(result);
