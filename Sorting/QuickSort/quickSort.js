/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/**
 * pick a random element
 *  place all the elements in the input array into two lists
 *  nums greater and less than pivot
 *  call quick sort on the two lists
 *
 * Time complexity:
 * - Worst Case:O(N logN)
 * - Avg Case:  O(N logN)
 * - Best Case: O(N logN)
 *
 * Space Complexity:
 * - O(logN)
 */

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const left = quickSort(arr.slice(1).filter((x) => x < pivot));
  const right = quickSort(arr.slice(1).filter((x) => x >= pivot));
  return [].concat(left, pivot, right);
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

  const result = quickSort(input);

  assertArraysEqual(result, expected, 'should sort a an array of integers');
}
test();

module.exports = quickSort;
