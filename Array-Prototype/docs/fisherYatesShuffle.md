# Fisher-Yates Shuffle

The Fisher-Yates shuffle, also known as the Knuth shuffle, is a widely used algorithm for randomly shuffling an array.
This function takes an array as input and returns a shuffled version of it. It works by iterating over the array from the end to the beginning, and for each element, selecting a random index between 0 and the current index, and swapping the current element with the element at the random index. This ensures that every element has an equal chance of ending up in any position in the shuffled array.

---

### Time Complexity

<details close>

**O(n)**

This is because we need to iterate over the entire array once to shuffle it.

</details>

---

### SPACE COMPLEXITY

<details close>

**O(1)**

The only additional memory used is the constant amount of memory required to store the loop variables and the temporary variable used for swapping the elements.

</details>

---

Note that in this implementation, we're using destructuring assignment to swap the elements. This is a convenient way to swap two variables without needing a temporary variable.

Also, it's important to use a good source of randomness when shuffling. In this implementation, we're using Math.random(), which generates a pseudo-random number between 0 and 1. It's generally considered sufficient for most applications, but if you need a more secure source of randomness, you should use a cryptographic random number generator.

overall, the Fisher-Yates shuffle algorithm is a simple and efficient way to shuffle an array in-place. It's easy to implement and has a time complexity that scales linearly with the size of the input array, making it a good choice for shuffling large arrays.
