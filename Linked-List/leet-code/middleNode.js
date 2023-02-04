function middleNode() {
  let count = 0;
  currNode = this.head;
  while (currNode) {
    currNode = currNode.next;
    count++;
  }
  count = Math.floor(count / 2);
  this.size -= count;
  while (count > 0) {
    this.head = this.head.next;
    count--;
  }
  return this;
}

module.exports = middleNode;
