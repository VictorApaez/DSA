# MERGE SORT

In this implementation, the mergeSort function uses a divide-and-conquer approach to sort the array. It starts by dividing the array into two halves, then recursively calls itself on each half until the base case is reached (an array with 0 or 1 element). The merge function is then used to merge the sorted arrays back together, by comparing the first elements of each array and adding the smaller one to a new result array. The time complexity of MergeSort is O(n log n), and its space complexity is O(n).

---

### Time Complexity

<details close>

**O(n log n)**

This is because the algorithm divides the array into halves in each step, resulting in log n steps, and performs n operations in each step to merge the arrays back together.

</details>

---

### SPACE COMPLEXITY

<details close>

**O(n)**

This is because the algorithm creates a new array to store the sorted elements, which requires n additional units of space. Additionally, the algorithm also requires a certain amount of stack space for the recursive calls, which is proportional to the height of the recursive call tree, which is O(log n).

</details>

---

It's important to note that the time and space complexity of the MergeSort algorithm is worst-case optimal, meaning that it performs at its best in the worst-case scenario, which makes it a popular choice for sorting large data sets.
