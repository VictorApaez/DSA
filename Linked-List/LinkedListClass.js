const util = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(...args) {
    this.head = null;
    this.size = 0;
    this.insertParams(args);
  }
  insertParams(args) {
    args.forEach((arg) => {
      this.insertTail(arg);
    });
  }
  // insert node first
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
  }

  // insert node last
  insertTail(data) {
    if (!this.head) {
      this.insertHead(data);
      return;
    }

    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = new Node(data);
    this.size += 1;
  }

  // get at index
  getAt(index) {
    if (this.size === 0) return "Invalid Index: List is empty";
    if (index < 1 || index > this.size) return `Invalid Index: Out of range`;
    let currNode = this.head;
    let i = 0;
    while (i < this.size && currNode) {
      if (i === index - 1) return currNode;
      currNode = currNode.next;
      i++;
    }
  }
  // delete node at index
  deleteAt(index) {
    if (this.size === 0) return "Invalid Index: List is empty";
    if (index < 1 || index > this.size) return `Invalid Index: Out of range`;
    if (index === 1) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;

    let i = 0;
    while (i < this.size && currNode) {
      if (i + 1 === index - 1) {
        currNode.next = currNode.next.next;
        this.size--;
        return this.head;
      }
      currNode = currNode.next;
      i++;
    }
  }

  validIndex(index) {
    //check if it is a number
    if (this.size === 0) return "Invalid Index: List is empty";
    if (index < 1 || index > this.size) return `Invalid Index: Out of range`;
  }
  // add node at index
  insertAt(data, index) {
    if (this.size === 0) return "Invalid Index: List is empty";
    if (index < 1 || index > this.size) return `Invalid Index: Out of range`;
    let currNode = this.head;
    let i = -1;
    while (i < this.size) {
      if (i + 1 === index - 1) {
        let newNode = new Node(data, currNode.next.next);
        this.size++;
        currNode.next = newNode;
        return newNode;
      }
      currNode = currNode.next;
      i++;
    }
  }
  // clear list
  clear() {
    this.head = null;
    this.size = 0;
  }
  // print nodes in order
  print() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  }
}

// let list = new LinkedList();
// list.insertTail("A");
// list.insertHead("B");
// list.insertHead("C");
// list.insertHead("D");
// list.insertHead("E");
// list.insertHead("F");
// list.insertAt("INSERT", 1);
// displays entire object (object, showHidden, depth, color)
// console.log(util.inspect(list, false, null, true));

module.exports = LinkedList;
