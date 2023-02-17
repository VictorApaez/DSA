function fisherYatesShuffle(array) {
  // iterate over the array from the end to the beginning
  for (let i = array.length - 1; i > 0; i--) {
    // generate a random index between 0 and the current index
    const j = Math.floor(Math.random() * (i + 1));

    // swap the current element with the element at the random index
    [array[i], array[j]] = [array[j], array[i]];
    //same thing without using Array deconstruction:
    // const temp = array[i];
    // array[i] = array[j];
    // array[j] = temp;
  }
  // return the shuffled array
  return array;
}
