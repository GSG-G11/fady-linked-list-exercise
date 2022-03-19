function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList(array = []) {
  this.head = null;
  this.tail = null;
  this.length = 0;

  if (Array.isArray(array)) {
    array.forEach((el) => {
      this.push(el);
    });
  }
}

DoublyLinkedList.prototype.push = function (val) {
  let Newnode = new Node(val);
  // checks if it's empty linkedlist
  if (!this.head) {
    this.head = this.tail = Newnode;
  } else {
    this.tail.next = Newnode;
    this.tail = Newnode;
  }

  this.length++;
  return this;
};

DoublyLinkedList.prototype.unshift = function (val) {
  let newNode = new Node(val);
  if (!this.head) {
    this.head = this.tail = newNode;
  } else {
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
  return this;
};

DoublyLinkedList.prototype.insert = function (index, val) {
  if (index < 0 || index >= this.length) return null;
  let newNode = new Node(val);

  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter === index - 1) {
      break;
    }
    counter++;
    currentNode = currentNode.next;
  }
  newNode.prev = currentNode;
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  this.length++;
};

DoublyLinkedList.prototype.getNode = function (index) {
  //repetion of insertion code
  let currentNode = this.head;
  let counter = 0;
  while (currentNode) {
    if (counter === index) {
      break;
    }
    currentNode = currentNode.next;
    counter++;
  }
  return currentNode;
};

DoublyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return null;
  let node = this.getNode(index);
  return node.val;
};

DoublyLinkedList.prototype.set = function (index, val) {
  if (index < 0 || index >= this.length) return undefined;
  let node = this.getNode(index);
  node.val = val;
};

DoublyLinkedList.prototype.pop = function () {
  if (!this.head) return undefined;
  let oldTail = this.tail;
  this.tail = oldTail.prev;

  this.length--;
  return oldTail.val;
};

DoublyLinkedList.prototype.shift = function () {
  if (!this.head) return undefined;
  let oldHead = this.head;
  this.head = oldHead.next;

  this.length--;
  return oldHead.val;
};

DoublyLinkedList.prototype.remove = function (index) {
  let prevNode = this.getNode(index - 1);
  let nextNode = this.getNode(index + 1);
  prevNode.next = nextNode;
  nextNode.prev = prevNode;

  this.length--;
};

DoublyLinkedList.prototype.reverse = function () {
  let currentNode = this.head;
  let prevNode;
  let nextNode;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    currentNode.prev = nextNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  this.head = prevNode;
  this.tail = currentNode;
};
