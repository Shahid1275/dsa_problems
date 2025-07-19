// The Big O notation accours according to the below functions and rules
// If we combine all the "O" operations it becomes O(n^2 + n)
// O(n^2) is a Dominant term
// "n" is a Non-Dominant term
// So we remove the "non-dominant" term and we're only left with O(n^2)
// This way, we simplify our bigO

// this is the Array Data Structure to storing the data
const studentDatabase = ["Shahid", "Ali", "john", "michel"];

// 'findStudent' that takes two parameters and this is Algorithm to find something
const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
    }
  }
};
// Call the function 'findStudent', passing in the student database
findStudent(studentDatabase, "john");

// find groceries
const groceries = ["milk", "Bread", "jam", "egg", "cheeze"];
//0(1) constant time complexity
const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item}`);
    }
  }
  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found ${item} 2`);
    }
  }
};
searchForItem("jam");

// find the numbers using 0(1) constant time
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findNumber = (arr, index) => arr[index];
console.log(findNumber(numbers, 6));

// function for finding pairs
//0(n^2) time complexity
function findPairs(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      console.log(`Pair ${arr[i]} and ${arr[j]}`);
    }
  }
}
// numbers use from the above const declaration so use this because all declare in one file
findPairs(numbers);

// O(n) → Linear Time
function printItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//If arr has 10 elements → 10 steps

//If arr has 1,000 elements → 1,000 steps

//Time grows directly with input

// O(1) → Constant Time
function printFirstItem(arr) {
  console.log(arr[0]); // Just one operation
}
//Whether the array has 10 or 10 million items, it always does one thing.

// Very efficient!

//O(n²) → Quadratic Time
function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}
//For n = 3: 9 pairs (3 × 3)

//For n = 100: 10,000 pairs (100 × 100)

//Used in algorithms like bubble sort, insertion sort.

//O(log n) → Logarithmic Time
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
//If array has 1,000,000 elements, it finds the item in about 20 steps

//Cuts search space in half each time

//Super efficient for sorted data
