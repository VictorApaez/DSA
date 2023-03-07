// returns the first element in an array that satisfies a given condition
// returns undefined if no element satisfies the condition.

// accepts two arguments: callback function and 'thisArg'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstEvenNumber = numbers.find(function (number) {
  return number % 2 === 0;
});

console.log(firstEvenNumber); // Output: 2
