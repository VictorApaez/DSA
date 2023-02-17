function flattenArray(arr) {
  return arr.reduce((flatArray, curr) => {
    let result = Array.isArray(curr) ? flattenArray(curr) : curr;
    return flatArray.concat(result);
  }, []);
}

let test = flattenArray([[1, 23], [[1, 3], [1]], 3]);
console.log(test);
