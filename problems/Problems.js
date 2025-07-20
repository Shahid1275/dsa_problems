// 1. Reverse String
function reverseString(str) {
  // Split the string into array, reverse it, join it back
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// 2. Palindrome Check
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("racecar")); // Output: true

// 3. Reverse Integer
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");
  return parseInt(reversed) * Math.sign(n);
}
console.log(reverseInt(-123)); // Output: -321

// 4. Capitalize Sentence
function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalize("hello world")); // Output: "Hello World"

// 5. FizzBuzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz(15);

// 6. Max Profit (Best Time to Buy and Sell Stock)
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5

// 7. Array Chunks
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1,2],[3,4],[5]]

// 8. Two Sum
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
