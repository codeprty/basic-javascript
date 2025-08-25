/*
Start with let fruits = ["apple", "banana"];
• Use .push("cherry") and print the array.
• Use .pop() and print the array.
*/
let fruits = ["apple", "banana"];

fruits.push("cherry")
console.log(fruits);

fruits.pop();
console.log(fruits);

/*
Start with let animals = ["dog"];
• Use .unshift("cat") and print the array.
• Use .shift() and print the array.
*/
let animals = ["dog"];

animals.unshift("cat");
console.log(animals);

animals.shift();
console.log(animals);

// Merge [3, 4] into [1, 2] using .concat() and print the result.
let nums = [1, 2];
let newNums = nums.concat([3, 4]);
console.log(newNums);

// From [100, 200, 300, 400, 500], extract [300, 400, 500] using .slice().
let arr = [100, 200, 300, 400, 500];
console.log(arr.slice(2, 5));

// From [10, 20, 30, 40, 50], use .splice() to remove 30 and 40 and replace them with 99.
let arr2 = [10, 20, 30, 40, 50];
arr2.splice(2, 2, 99);
console.log(arr2);