// 234. Palindrome Linked List
function isPalindrome() {
  let curr = this.head;
  let forward = "";
  let backwards = "";

  while (curr) {
    forward = forward + curr.data;
    backwards = curr.data + backwards;
    curr = curr.next;
  }
  return forward === backwards;
}

module.exports = isPalindrome;
