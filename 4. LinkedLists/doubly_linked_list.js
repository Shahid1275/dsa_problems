// Class representing a node in a doubly linked list
class DoublyNode {
  constructor(value) {
    this.value = value; // The value held by the node
    this.next = null; // Pointer to the next node
    this.prev = null; // Pointer to the previous node
  }
}

// Class representing the doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null; // First node of the list
    this.tail = null; // Last node of the list
    this.length = 0; // Total number of nodes in the list
  }

  // Adds a node to the end of the list
  push(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      // If list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link current tail to new node and update tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++; // Increment size
    return this;
  }

  // Removes a node from the end of the list
  pop() {
    if (!this.head) return undefined; // Empty list

    const poppedNode = this.tail;

    if (this.length === 1) {
      // If only one node, clear both head and tail
      this.head = null;
      this.tail = null;
    } else {
      // Move tail to previous node and disconnect the removed node
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode; // Return removed node
  }

  // Adds a node at the beginning of the list
  unshift(value) {
    const newNode = new DoublyNode(value);
    if (!this.head) {
      // If list is empty, set head and tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link new node before current head
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Removes a node from the beginning of the list
  shift() {
    if (!this.head) return undefined; // Empty list

    const oldHead = this.head;

    if (this.length === 1) {
      // If only one node, clear head and tail
      this.head = null;
      this.tail = null;
    } else {
      // Move head to the next node and disconnect removed node
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead; // Return removed node
  }

  // Retrieves the node at a specific index (0-based)
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, current;

    // Optimize: Start from head or tail depending on index position
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  // Updates the value of a node at a given index
  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false; // Node not found
  }

  // Inserts a new node at a specified index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value); // Insert at head
    if (index === this.length) return !!this.push(value); // Insert at tail

    const newNode = new DoublyNode(value);
    const beforeNode = this.get(index - 1); // Node before insertion point
    const afterNode = beforeNode.next; // Node after insertion point

    // Insert newNode between beforeNode and afterNode
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  // Removes a node at a specified index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift(); // Remove from beginning
    if (index === this.length - 1) return this.pop(); // Remove from end

    const removedNode = this.get(index); // Node to remove
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    // Reconnect neighbors and isolate removed node
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  // Reverses the entire list
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let temp = null;

    // Swap next and prev pointers for each node
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      // Move to next node (which is previous before reversal)
      current = current.prev;
    }

    return this;
  }
}
