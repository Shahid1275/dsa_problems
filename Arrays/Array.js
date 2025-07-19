class MyArray2 {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Add an item to the end
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // Get item by index
  get(index) {
    return this.data[index];
  }

  // Remove last item and return it
  pop() {
    if (this.length === 0) return undefined;

    this.length--;
    const lastItem = this.data[this.length];
    delete this.data[this.length];
    return lastItem;
  }

  // Remove first item and shift all items to the left
  shift() {
    if (this.length === 0) return undefined;

    const firstItem = this.data[0];
    // Shift all elements to the left by one index
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    // Remove the last now-duplicate item
    delete this.data[this.length - 1];
    this.length--;

    return firstItem;
  }

  // Delete item at a specific index and shift items to fill the gap
  delete(index) {
    if (index < 0 || index >= this.length) return undefined;

    const item = this.data[index];

    // Shift everything after the deleted item to the left
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the now-extra last item
    delete this.data[this.length - 1];
    this.length--;

    return item;
  }
}
const myNewArray2 = new MyArray2();

myNewArray2.push("apple");
myNewArray2.push("banana");
myNewArray2.push("cherry");
myNewArray2.push("date");

console.log(myNewArray2);
// { length: 4, data: { '0': 'apple', '1': 'banana', '2': 'cherry', '3': 'date' } }

console.log(myNewArray2.shift());
// Output: "apple"

console.log(myNewArray2);
// { length: 3, data: { '0': 'banana', '1': 'cherry', '2': 'date' } }

console.log(myNewArray2.delete(1));
// Output: "cherry"

console.log(myNewArray2);
// { length: 2, data: { '0': 'banana', '1': 'date' } }
