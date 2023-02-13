function quickSort(arr) {
  // Base case: return the array if it has 0 or 1 element
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the last element as the pivot
  const pivot = arr[arr.length - 1];

  // Create two arrays to store elements smaller and larger than the pivot
  const left = [];
  const right = [];

  // Iterate through the array and add elements to the left or right arrays
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively call quickSort on the left and right arrays, and concatenate the results with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
