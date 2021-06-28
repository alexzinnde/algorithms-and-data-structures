/* eslint-disable jest/expect-expect */
/* eslint-disable jest/no-disabled-tests */
/* eslint-disable no-console */
function Node(data) {
  this.data = data;
  this.next = null;
}

/**
 * Write push() and buildOneTwoThree()
 * functions to easily update and initialize linked lists.
 * Try to use the push() function within your buildOneTwoThree() function.
 * Here's an example of push() usage:
 * var chained = null
 * chained = push(chained, 3)
 * chained = push(chained, 2)
 * chained = push(chained, 1)
 * push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
 *
 * The push function accepts head and data parameters,
 * where head is either a node object or null/None/nil.
 * Your push implementation should be able to create a
 * new linked list/node when head is null/None/nil.
 *
 * The buildOneTwoThree function should create and return
 * a linked list with three nodes: 1 -> 2 -> 3 -> null
 */

function push(head, data) {
  if (head === null) {
    return new Node(data);
  }
  const node = new Node(data);
  node.next = head;
  return node;
}

function buildOneTwoThree() {
  const node = push(new Node(3), 2);
  return push(node, 1);
}

// ======================= TESTS =========================
function test() {
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed');
    } else {
      console.log(`FAILED: [${testName}],  expected "${expected}" but got "${actual}"`);
    }
  }
  const head = push(null, 1);
  assertEqual(head.data, 1, 'should return a node when no linked list given');
  assertEqual(head.next, null, 'should return a sinlge node when no linked list given');

  const oneTwoThree = buildOneTwoThree();
  assertEqual(oneTwoThree.data, 1, 'should return a linked list with the first element having a value of 1');
  assertEqual(oneTwoThree.next.data, 2, 'should return a linked list with the second element having a value of 2');

}

test();
