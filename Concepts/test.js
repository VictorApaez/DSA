// Topics
// Partially applied curried functions
// Function composition with curried functions

// Basic example of currying:
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const double = multiply(2); // returns anonymous function
console.log(double(5)); // Output: 10 (2*5)
