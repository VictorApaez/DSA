// 2. Add Two Numbers
function addTwoNumbers(l1, l2) {
  const result = new ListNode();
  let curr = result;
  let carry = 0;
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return result.next;
}

module.exports = addTwoNumbers;
