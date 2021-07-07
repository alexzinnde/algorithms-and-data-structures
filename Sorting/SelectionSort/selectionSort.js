/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/**
 * Selection Sort
 * iterate over the entire array
 * at each location find the smallest value in the array
 * from the current location to the end,
 * swap that value to the current position
 *
 * Time Complexity:
 *  - Worst Case: O(N^2)
 *  - Avg Case: O(N^2)
 *  - Best Case: O(N^2)
 *
 * Space Complexity:
 *    O(1)
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let iSmall = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[iSmall]) {
        iSmall = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[iSmall];
    arr[iSmall] = temp;
  }

  return arr;
};

function test() {
  function assertArraysEqual(actual, expected, testName) {
    const equalLength = actual.length === expected.length;
    let equalValues = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        equalValues = false;
        break;
      }
    }
    if (equalLength && equalValues) {
      console.log('passed');
    } else {
      console.log(
        `FAILED ${testName}, expected "${expected}", but got "${actual}"`
      );
    }
  }
  const input = [43, 2, 1, 100, 100, 21, 21];
  const expected = [1, 2, 21, 21, 43, 100, 100];

  const result = selectionSort(input);

  assertArraysEqual(result, expected, 'should sort a an array of integers');
}
// test();
module.exports = selectionSort;
