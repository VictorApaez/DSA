const util = require("util");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }

  printNode() {
    console.log(util.inspect(this, false, null, true));
  }
}

class LinkedList {
  constructor(...args) {
    this.head = null;
    this.size = 0;
    this.#insertParams(args);
  }
  // private method to insert arguments
  #insertParams(args) {
    args.forEach((arg) => {
      this.insertTail(arg);
    });
  }
  // insert node first
  insertHead(data) {
    this.head = new Node(data, this.head);
    this.size += 1;
    return this;
  }

  // insert node last
  insertTail(data) {
    if (!this.head) {
      this.insertHead(data);
      return this;
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
      if (i === index - 1) return currNode.data;
      currNode = currNode.next;
      i++;
    }
  }
  // delete node at index
  deleteAt(index) {
    if (this.size === 0) return "Invalid Index: List is empty";
    if (index < 1 || index > this.size) return `Invalid Index: Out of range`;
    if (index === 1) {
      const deletedData = this.head.data;
      this.head = this.head.next;
      return deletedData;
    }
    let currNode = this.head;

    let i = 0;
    while (i < this.size && currNode) {
      if (i + 1 === index - 1) {
        const deletedData = currNode.next.data;
        currNode.next = currNode.next.next;
        this.size--;

        return deletedData;
      }
      currNode = currNode.next;
      i++;
    }
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
    return this;
  }
  // print nodes in order
  printData() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  }

  printAll() {
    console.log(util.inspect(this, false, null, true));
  }
}

module.exports = { LinkedList };
