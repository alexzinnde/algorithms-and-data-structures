const Stack = function Stack() {
  const thing = Object.create(stackMethods);
  thing.storage = {};
  thing.top = 0;
  return thing;
};

const stackMethods = {
  push: function push(value) {
    this.storage[this.top] = value;
    this.top += 1;
  },

  pop: function pop() {
    if (this.top) {
      this.top -= 1;
      const result = this.storage[this.top];
      delete this.storage[this.top];
      return result;
    }
    return null;
  },

  size: function size() {
    return this.top;
  },
};
