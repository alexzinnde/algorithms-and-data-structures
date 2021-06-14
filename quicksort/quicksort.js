const quicksort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[Math.floor(Math.random() * array.length)];
  const less = quicksort(array.slice().filter((x) => x < pivot));
  const greater = quicksort(array.slice().filter((x) => x > pivot));

  return less.concat(pivot, greater);
};

module.exports = quicksort;

// function test() {
//   const result = quicksort([4, 3, 1, 2, 3]);
//   console.log(result);
// }

// test();
