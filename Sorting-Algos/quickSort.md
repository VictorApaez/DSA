# QUICK SORT

This implementation uses the last element of the array as the pivot element. The pivot element is used to divide the array into two sub-arrays: one with elements smaller than the pivot, and one with elements larger than the pivot. The function then recursively calls itself on the left and right sub-arrays until the base case is reached (an array with 0 or 1 element). Finally, the sub-arrays are concatenated back together with the pivot element in the middle.

---

### Time Complexity

<details close>

**O(n^2)** - In the worst case, when the pivot is always the largest or smallest element

**O(n log n)** - on average

</details>

---

### SPACE COMPLEXITY

<details close>

**O(n)** - in the worst case

</details>

---

It's important to note that the time and space complexity can be improved by using more advanced pivot selection strategies and by avoiding the creation of the left and right arrays, but this implementation provides a basic understanding of the QuickSort algorithm.
