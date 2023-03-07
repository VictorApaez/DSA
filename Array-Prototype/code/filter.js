// The function should return true if the element should be included in the resulting array, or false if it should be excluded.

// filter has two parameters: a callback function and `thisArg` (optional see below)
// the callback function accepts three arguments (element, index, array):

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arr.filter(function (item, index, originalArray) {
  return item % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6, 8, 10]

// thisArg parameter is the optional to represent the value of `this` inside the callback function

const person = {
  name: "Alice",
  age: 30,
  isAdult: function () {
    return this.age >= 18;
  },
};

const people = [
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "Dave", age: 25 },
];

const adults = people.filter(person.isAdult); // without thisArg

console.log(adults); // Output: [] because 'this' is undefined

const adults2 = people.filter(person.isAdult, person); // with thisArg

console.log(adults2); // Output: [ { name: 'Bob', age: 20 }, { name: 'Charlie', age: 15 }, { name: 'Dave', age: 25 } ] because 'this' is the person object
