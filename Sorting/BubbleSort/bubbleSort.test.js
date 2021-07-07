const bubbleSort = require('./bubbleSort');

describe('Selection Sort', () => {
  it('should exist', () => {
    expect(bubbleSort).toBeDefined();
    expect(bubbleSort).not.toBeNull();
  });

  it('should sort an array numerically', () => {
    const input = [1, 2, 43, 100, 100, 21, 21];
    const expected = [1, 2, 21, 21, 43, 100, 100];
    expect(bubbleSort(input)).toEqual(expected);
  });

  it('should sort arrays with decimal numbers', () => {
    const input = [24.7, 24.3, 23, 9, 3, 3, 100, 25, 100];
    const expected = [3, 3, 9, 23, 24.3, 24.7, 25, 100, 100];
    expect(bubbleSort(input)).toEqual(expected);
  });

  it('should sort reverse sorted arrays', () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle presorted arrays', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort arrays with negative numbers', () => {
    const input = [20, -10, -10.1, 2, 4, 299];
    const expected = [-10.1, -10, 2, 4, 20, 299];
    expect(bubbleSort(input)).toEqual(expected);
  });
});
