const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;
  let mid = Math.floor(high / 2);

  while (low <= high) {
    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] > target) {
      high = mid - 1;
    }

    if (array[mid] < target) {
      low = mid + 1;
    }
    mid = Math.floor((low + high) / 2);
  }

  return null;
};

module.exports = binarySearch;
