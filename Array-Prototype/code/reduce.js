// // Reduce, Recursion

// NOTE: the following creates a new array
// This function takes an array as input and returns a flattened version of the array.
function flattenArray(arr) {
  // The reduce method is used to iterate over the array and accumulate the flattened result.
  return arr.reduce((flatArray, curr) => {
    // If the current element is an array, we recursively call the flattenArray function to flatten it.
    let result = Array.isArray(curr) ? flattenArray(curr) : curr;

    // The flattened result is then concatenated with the accumulator flatArray.
    return flatArray.concat(result);
  }, []); // The initial value of the accumulator is an empty array.
}

// ===============================

// function flattenArray(arr) {
//   return arr.reduce((flatArray, curr) => {
//     if (Array.isArray(curr)) {
//       flattenArray(curr).forEach((item) => flatArray.push(item));
//     } else {
//       flatArray.push(curr);
//     }
//     return flatArray;
//   }, []);
// }

// ===============================

// function flattenArray(arr) {
//   return arr.reduce((prev, curr) => {
//     return prev.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
//   }, []);
// }

// ===============================

// function flattenArray(arr) {
//   let prev = [];

//   for (let i = 0; i < arr.length; i++) {
//     curr = arr[i];
//     if (Array.isArray(curr)) {
//       flattenArray(curr).forEach((el) => prev.push(el));
//     } else {
//       prev.push(curr);
//     }
//   }
//   return prev;
// }

let test = flattenArray([[1, 23], [[1, 3], [1]], 3]);
console.log(test);
