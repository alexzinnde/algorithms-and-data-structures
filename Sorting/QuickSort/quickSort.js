/**
 * pick a random element
 *  place all the elements in the input array into two lists
 *  nums greater and less than pivot
 *  call quick sort on the two lists
 */

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr.splice(0, 1);
  const left = arr.slice().filter((x) => x < pivot);
  const right = arr.slice().filter((x) => x >= pivot);

  return [].concat(quickSort(left), pivot, quickSort(right));
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
