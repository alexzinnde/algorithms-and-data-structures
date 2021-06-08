// INPUT: an unsrted array of integers
// OUTPUT: a sorted array of integers
// CONSTRAINTS: Selection Sort Method
// EDGE CASES: empty array -> return empty array

const selectionSort = (arr) => {
  const unsorted = arr.slice();
  const sorted = [];

  const findSmallestIndex = (inputArr) => {
    let smallestIndex = 0;
    inputArr.forEach((num, i) => {
      if (num < inputArr[smallestIndex]) {
        smallestIndex = i;
      }
    });
    return smallestIndex;
  };

  while (unsorted.length > 0) {
    const smallest = unsorted.splice(findSmallestIndex(unsorted), 1)[0];
    sorted.push(smallest);
  }
  return sorted;
};

module.exports = selectionSort;
