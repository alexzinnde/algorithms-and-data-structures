const quicksort = require('./quicksort');

describe('quicksort', () => {
  it('should sort a short array of integers', () => {
    const result = quicksort([8, 7, 3, 6, 9, 2, 4, 5, 1]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should sort an enormous array of random integers', () => {
    const input = [];
    const n = 1000;
    for (let i = 0; i < n; i += 1) {
      const number = Math.floor(Math.random() * n);
      input.push(number);
    }
    const sorted = input.sort((a, b) => a - b); // sort numerically, not lexicographically
    const result = quicksort(input);

    // using .eql can cause an n-line error message to print, so we do it by hand
    for (let i = 0; i < n; i += 1) {
      expect(result[i]).toEqual(sorted[i]);
    }
  });
});
