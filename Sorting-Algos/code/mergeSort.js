function mergeSort(arr) {
  // Base case: return the array if it has 0 or 1 element
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Divide the array into two halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively call mergeSort on the left and right arrays
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted arrays back together
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  // Create a new array to store the merged elements
  const result = [];

  // Keep track of the current index for each array
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare the first elements of the left and right arrays, and add the smaller one to the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left or right arrays to the result array
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  // Return the merged array
  return result;
}
