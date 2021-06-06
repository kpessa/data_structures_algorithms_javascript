const { expect } = require('@jest/globals');
const { Node, LinkedList } = require('../LinkedList');

test('Push on linked list given normal integer input', () => {
  const ll = new LinkedList(5);
  ll.push(3);
  expect(ll.tail.value).toBe(3);
  expect(ll.length).toBe(2);
  expect(ll.tail).toMatchObject(new Node(3));
});
test('Push on an empty list', () => {
  const ll = new LinkedList();
  ll.push(3);
  expect(ll.head).toMatchObject(new Node(3));
  expect(ll.tail).toMatchObject(new Node(3));
  expect(ll.length).toBe(1);
});
