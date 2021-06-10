/* eslint-disable func-names */
const Stack = function () {
  const thing = {};
  thing.storage = {};
  thing.top = 0;
  _.extend(thing, stackMethods);
  return thing;
};

const stackMethods = {
  push: function (value) {
    this.storage[this.top] = value;
    this.top += 1;
  },

  pop: function () {
    if (this.top) {
      this.top -= 1;
      const result = this.storage[this.top];
      delete this.storage[this.top];
      return result;
    }
  },

  size: function () {
    return this.top;
  }
};

