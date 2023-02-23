class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  const result = new ListNode();
  let curr = result;
  let carry = 0;

  while (l1 || l2) {
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
};

let l3 = new ListNode(1);
let l9 = new ListNode(2, l3);
let l4 = new ListNode(1, l9);

let l5 = new ListNode(4);
let l6 = new ListNode(5, l5);

// console.log(l4);
// console.log(l6);
console.log(addTwoNumbers(l4, l6));
