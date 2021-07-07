/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/**
 * Bubble Sort
 * Iterate through the array and compare every item with
 * its neighbor. If the current item is larger than the
 * next item, swap items.
 *
 * Time Complexity
 *  - Worst Case: O(N^2) -> quadratic
 *  - Average: O(N^2) -> quadratic
 *  - Best Case: O(N) -> Linear
 *
 * Space Complexity
 *  - O(1)
 */

// I: array of numbers
// O: sorted array of numbers
// C: Bubble Sort method
// E: - empty list, return empty list
//    -

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

module.exports = bubbleSort;
