// 234. Palindrome Linked List
var isPalindrome = function () {
  let curr = this.head;
  let forward = "";
  let backwards = "";

  while (curr) {
    forward = forward + curr.data;
    backwards = curr.data + backwards;
    curr = curr.next;
  }
  console.log(forward, backwards);
  return forward === backwards;
};

module.exports = isPalindrome;
