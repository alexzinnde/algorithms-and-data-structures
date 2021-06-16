const _ = require('underscore');

const Tree = function Tree(value) {
  const newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

const treeMethods = {};

// Time Complexity: O(1)
treeMethods.addChild = function addChild(value) {
  const child = Tree(value);
  this.children.push(child);
};

// Time Complexity: O(n)
treeMethods.contains = function contains(target) {
  if (this.value === target) {
    return true;
  }
  return this.children.reduce((memo, tree) => memo || tree.contains(target), false);
};

