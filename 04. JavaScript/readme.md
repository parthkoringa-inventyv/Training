# JavaScript Tasks

This repository contains JavaScript programming exercises focusing on JavaScript basic concepts.

## Task 1: Array Manipulation with Promise Validation

### Description
This task demonstrates array manipulation across multiple functions with promise-based validation. The implementation involves:

1. **Function 1 (func1)**:
   - Creates an initial array with numeric values
   - Removes the first element from the array
   - Passes both the removed first element and the modified array to the second function

2. **Function 2 (func2)**:
   - Creates a second array with its own set of numeric values
   - Restructures the array by:
     - Adding the first element from array1 at the beginning
     - Keeping all original elements of array2 in the middle
     - Appending all remaining elements from array1 at the end
   - Final array format: `[firstElement, ...array2Elements, ...array1Elements]`

3. **Promise Validation**:
   - A promise is called with the final combined array
   - The promise calculates the sum of all array elements
   - **Resolution condition**: Promise resolves if the sum is greater than 35
   - **Rejection condition**: Promise rejects if the sum is 35 or less

---

## Task 3: Array Manipulation with Symbols and Promise Validation

### Description
This task is similar to Task 1 but incorporates JavaScript Symbols for storing arrays within objects to achieve the same results as task1. 

1. **Function 1 (func1) with Symbol**:
   - Creates a Symbol and use it as key to point the array
   - Creates an object with a property that stores an array of numeric values 
   - Removes the first element from the array 
   - Passes both the removed first element and the modified array to the second function

2. **Function 2 (func2) with Symbol**:
   - Creates a second Symbol 
   - Creates another object with its own array of numeric values and
   - Restructures the array by:
     - Adding the first element from array1 at the beginning
     - Keeping all original elements of array2 in the middle
     - Appending all remaining elements from array1 at the end using spread operator
   - Final array format: `[firstElement, ...array2Elements, ...array1Elements]`

3. **Promise Validation**:
   - A promise is called with the final combined array
   - The promise calculates the sum of all array elements
   - **Resolution condition**: Promise resolves if the sum is greater than 35
   - **Rejection condition**: Promise rejects if the sum is 35 or less
