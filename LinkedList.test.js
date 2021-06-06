const { expect } = require('@jest/globals');
const { Node, LinkedList } = require('./LinkedList');

test('Create a new Linked List, head and tail equal to value', () => {
  const myLinkedList = new LinkedList(3);
  expect(myLinkedList.head).toMatchObject(new Node(3));
  expect(myLinkedList.tail).toMatchObject(new Node(3));
});
