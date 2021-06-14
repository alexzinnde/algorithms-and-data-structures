const quicksort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[0];
  const less = quicksort(array.slice(1).filter((x) => x <= pivot));
  const greater = quicksort(array.slice(1).filter((x) => x > pivot));

  return [].concat(less, pivot, greater);
};

module.exports = quicksort;
