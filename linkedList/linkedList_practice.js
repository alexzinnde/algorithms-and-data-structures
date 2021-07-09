function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

function test() {
  const list = new Node(1);
  list.next = new Node(2);
  list.next.next = new Node(3);
  list.next.next.next = new Node(4);

  const rList = revList(list);

  console.log(rList.data === 4 ? 'passed' : 'FAILED');
  console.log(rList.next.data === 3 ? 'passed' : 'FAILED');
  console.log(rList.next.next.data === 2 ? 'passed' : 'FAILED');
  console.log(rList.next.next.next.data === 1 ? 'passed' : 'FAILED');
  console.log(rList.next.next.next.next === null ? 'passed' : 'FAILED');
}
test();

function revList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
