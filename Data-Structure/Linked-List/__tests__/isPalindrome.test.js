const LinkedList = require("../main");

test("Expect Linked List {1,1,2,1,1} to be true", () => {
  let test = new LinkedList(1, 1, 2, 1, 1);
  expect(test.isPalindrome()).toBe(true);
});

test("Expect Linked List {1,1,1,1} to be true", () => {
  let test = new LinkedList(1, 1, 1, 1);
  expect(test.isPalindrome()).toBe(true);
});

test("Expect Linked List {} to be true", () => {
  let test = new LinkedList();
  expect(test.isPalindrome()).toBe(true);
});

test("Expect Linked List {1,2,3} to be false", () => {
  let test = new LinkedList(1, 2, 3);
  expect(test.isPalindrome()).toBe(false);
});

test("Expect Linked List {4,5,23,1} to be false", () => {
  let test = new LinkedList(1, 2, 3);
  expect(test.isPalindrome()).toBe(false);
});
