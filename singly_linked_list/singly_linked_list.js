// Node class to create individual nodes in the linked list
class Node {
  constructor(value) {
    this.value = value; // Value stored in the node
    this.next = null; // Pointer to the next node (initially null)
  }
}

// LinkedList class to manage the list operations
class LinkedList {
  constructor() {
    this.head = null; // Head pointer of the list (first node)
    this.tail = null; // Tail pointer of the list (last node)
    this.length = 0; // Total number of nodes in the list
  }

  // Adds a node at the end of the list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Attach new node to the end and update tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // Increment length
    return this; // Return the list
  }

  // Removes a node from the end of the list
  pop() {
    if (!this.head) return undefined; // List is empty

    let current = this.head;
    let newTail = current;

    // Traverse to the second-to-last node
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    // Set new tail and disconnect the last node
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // If the list becomes empty
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current; // Return the removed node
  }

  // Adds a node at the beginning of the list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If list is empty, set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link new node to current head and update head
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Removes a node from the beginning of the list
  shift() {
    if (!this.head) return undefined; // List is empty

    const currentHead = this.head;
    this.head = currentHead.next; // Move head to next node
    this.length--;

    // If the list becomes empty
    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead; // Return removed node
  }

  // Returns the first element (head) of the list
  getFirst() {
    return this.head;
  }

  // Returns the last element (tail) of the list
  getLast() {
    return this.tail;
  }

  // Returns the node at a specific index (0-based)
  get(index) {
    if (index < 0 || index >= this.length) return null; // Invalid index

    let counter = 0;
    let current = this.head;

    // Traverse to the desired index
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current; // Return the node at that index
  }

  // Sets a new value at a given index
  set(index, value) {
    const foundNode = this.get(index); // Get node at index
    if (foundNode) {
      foundNode.value = value; // Update value
      return true;
    }
    return false; // If node doesn't exist
  }

  // Inserts a new node at a given index
  insert(index, value) {
    if (index < 0 || index > this.length) return false; // Invalid index

    if (index === 0) return !!this.unshift(value); // Insert at beginning
    if (index === this.length) return !!this.push(value); // Insert at end

    const newNode = new Node(value);
    const prev = this.get(index - 1); // Get node before insertion point

    newNode.next = prev.next; // Link new node to next node
    prev.next = newNode; // Link previous node to new node
    this.length++;

    return true;
  }

  // Removes a node at a given index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined; // Invalid index

    if (index === 0) return this.shift(); // Remove from beginning
    if (index === this.length - 1) return this.pop(); // Remove from end

    const previousNode = this.get(index - 1); // Node before target
    const removed = previousNode.next; // Node to be removed

    previousNode.next = removed.next; // Bypass removed node
    this.length--;

    return removed; // Return removed node
  }

  // Returns the current size (number of nodes) of the list
  size() {
    return this.length;
  }

  // Empties the list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Finds and returns the middle node of the list
  findMiddle() {
    if (!this.head) return null; // Empty list

    let slow = this.head; // Moves one step
    let fast = this.head; // Moves two steps

    // When fast reaches the end, slow will be at the middle
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow; // Return the middle node
  }

  // Reverses the entire list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    // Traverse and reverse the direction of each node's next pointer
    for (let i = 0; i < this.length; i++) {
      next = node.next; // Store next node
      node.next = prev; // Reverse the pointer
      prev = node; // Move prev forward
      node = next; // Move node forward
    }

    return this; // Return the reversed list
  }
}
