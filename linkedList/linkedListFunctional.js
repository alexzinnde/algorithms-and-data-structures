const Node = (value) => {
  const node = {};

  node.value = value;
  node.next = null;

  return node;
};

const LinkedList = function LinkedList() {
  const list = {};
  list.head = null;
  list.tail = null;

  // Time Complexity: O(1)
  list.addToTail = (value) => {
    const node = Node(value);

    if (list.tail === null) {
      list.head = node;
      list.tail = node;
      return;
    }

    list.tail.next = node;
    list.tail = node;
  };

  // Time Complexity: O(1)
  list.removeHead = () => {
    const oldHead = list.head;
    list.head = list.head.next;
    oldHead.next = null;
    return oldHead.value;
  };

  // Time Complexity O(n)
  list.contains = (target) => {
    let node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};
