/* eslint-disable func-names */
const Stack = function () {
  const someInstance = {};

  // Use an object with numeric keys to store values
  const storage = {};
  let top = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[top] = value;
    top += 1;
  };

  someInstance.pop = function () {
    if (top) {
      top -= 1;
      const result = storage[top];
      delete storage[top];
      return result;
    }
    return null;
  };

  someInstance.size = function () {
    return top;
  };

  return someInstance;
};
