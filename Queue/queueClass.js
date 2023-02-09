class Queue {
  constructor(...params) {
    this.items = [];
    params.forEach((item) => {
      this.enqueue(item);
    });
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    this.items.shift();
  }
}

module.exports = Queue;
