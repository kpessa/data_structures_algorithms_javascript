const { checkForInteger, checkInput } = require('./utils');

class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
  toString() {
    return `${this.value} -> ${this.next}`;
  }
}

class LinkedList {
  // create a new node
  constructor(value = null) {
    checkInput(value);
    if (value) this.head = this.tail = new Node(value);
    else this.head = this.tail = null;
    value ? (this.length = 1) : (this.length = 0);
  }
  to_a() {
    if (!this.head) return [];
    const a = [];
    let temp = this.head;
    a.push(temp.value);
    while (temp.next) {
      temp = temp.next;
      a.push(temp.value);
    }
    return a;
  }
  toString() {
    return `Linked list: ${this.to_a()}
    head: ${this.head}
    tail: ${this.tail}`;
  }
  push(value) {
    const newNode = new Node(value); // create a new node
    if (!this.head) this.head = this.tail = newNode;
    else this.tail.next = this.tail = newNode; // add Node to end
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined; // 0 items edgecase
    let pre = this.head;
    let temp = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) this.head = this.tail = null; // 1 item edgecase
    return temp;
  }
  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (this.length === 1) this.tail = this.head;
    return true;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = index; i--; ) temp = temp.next;
    return temp;
  }
  // create new Node
  // insert Node
  insert(index, value) {}
}

module.exports = { Node, LinkedList };
