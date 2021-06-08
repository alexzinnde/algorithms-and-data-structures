const binarySearch = require('./binarySearch');

describe('binary search', () => {
  it('should exist', () => {
    expect(binarySearch).toBeDefined();
  });

  it('should return 0 for 5 in [5]', () => {
    const result = binarySearch([5], 5);
    expect(result).toBe(0);
  });

  it('should return null for 4 in [5]', () => {
    const result = binarySearch([5], 4);
    expect(result).toBeNull();
  });

  it('should return 0 for 1 in [1, 2, 3, 4, 5]', () => {
    const result = binarySearch([1, 2, 3, 4, 5], 1);
    expect(result).toBe(0);
  });

  it('should return 2 for 3 in [1, 2, 3, 4, 5]', () => {
    const result = binarySearch([1, 2, 3, 4, 5], 3);
    expect(result).toBe(2);
  });

  it('should return 4 for 5 in [1, 2, 3, 4, 5]', () => {
    const result = binarySearch([1, 2, 3, 4, 5], 5);
    expect(result).toBe(4);
  });

  it('should return 3 for 4 in [1, 2, 3, 4, 5, 6]', () => {
    const result = binarySearch([1, 2, 3, 4, 5], 4);
    expect(result).toBe(3);
  });

  it('should return 3 for 45 in [11, 22, 33, 45, 53, 62]', () => {
    const result = binarySearch([11, 22, 33, 45, 53, 62], 45);
    expect(result).toBe(3);
  });

  it('should return null for 55 in [11, 22, 33, 45, 53, 62]', () => {
    const result = binarySearch([11, 22, 33, 45, 53, 62], 55);
    expect(result).toBeNull();
  });
});
