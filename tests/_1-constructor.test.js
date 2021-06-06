const { expect } = require('@jest/globals');
const { Node, LinkedList } = require('../LinkedList');

test('Normal Input: <int>: 5', () => {
  const ll = new LinkedList(5);
  expect(ll.head.value).toBe(5);
  expect(ll.tail.value).toBe(5);
  expect(ll.head.next).toBe(null);
  expect(ll.length).toBe(1);
});
test('Normal Input: <int>: 5, match Node objects?', () => {
  const ll = new LinkedList(5);
  expect(ll.head).toMatchObject(new Node(5));
  expect(ll.tail).toMatchObject(new Node(5));
});

test('Faulty Input: <str>: "string"', () => {
  expect(() => new LinkedList('string')).toThrow();
});

test('Faulty Input: <float>: 3.3', () => {
  expect(() => new LinkedList(3.3)).toThrow();
});
