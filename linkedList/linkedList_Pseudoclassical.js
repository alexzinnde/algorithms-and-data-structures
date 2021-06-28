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

// Implement Length() to count the number of nodes in a linked list.

function length(head) {
  return head ? 1 + length(head.next) : 0;
}

// Implement Count() to count the occurrences of an integer in a linked list.

function count(head, data) {
  if (!head) return 0;
  return (head.data === data ? 1 : 0) + count(head.next, data);
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

  console.log('================== Push() ========================');
  const head = push(null, 1);
  assertEqual(head.data, 1, 'should return a node when no linked list given');
  assertEqual(head.next, null, 'should return a sinlge node when no linked list given');

  console.log('================== buildOneTwoThree() ========================');
  const oneTwoThree = buildOneTwoThree();
  assertEqual(oneTwoThree.data, 1, 'should return a linked list with the first element having a value of 1');
  assertEqual(oneTwoThree.next.data, 2, 'should return a linked list with the second element having a value of 2');

  console.log('================== length() ========================');
  assertEqual(length(oneTwoThree), 3, ' should return the length of a given linked list');

  console.log('================== count() ========================');
  let list = push(null, 1);
  list = push(list, 2);
  list = push(list, 2);
  list = push(list, 3);
  list = push(list, 3);
  list = push(list, 3);
  list = push(list, 3);
  list = push(list, 5);
  list = push(list, 5);
  list = push(list, 0);

  assertEqual(count(list, 1), 1, 'should return 1 when 1 node contains the target data');
  assertEqual(count(list, 2), 2, 'should return 2 when 2 nodes contains the target data');
  assertEqual(count(list, 3), 4, 'should return 4 when 4 nodes contains the target data');
  assertEqual(count(list, 5), 2, 'should return 2 when 2 nodes contains the target data');
  assertEqual(count(list, 10), 0, 'should return 0 when 0 nodes contains the target data');
}

test();
