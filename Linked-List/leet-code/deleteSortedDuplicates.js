function deleteSortedDuplicates() {
  let curr = this.head;

  while (curr && curr.next) {
    if (curr.next.data === curr.data) {
      curr.next = curr.next.next;
      this.size--;
    } else {
      curr = curr.next;
    }
  }
  return this;
}

module.exports = deleteSortedDuplicates;
