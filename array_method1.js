/*
Array Methods (Part 1 — Basics & Mutation)
• push / pop → add/remove at the end of an array
• shift / unshift → add/remove at the start of an array
• concat → merge arrays
• slice → copy part of an array
• splice → add/remove/change elements in place
*/

let nums = [1, 2, 3];

// Use .push(4) and print the array.
nums.push(4);
console.log(nums);

// Use .pop() and print the array.
nums.pop();
console.log(nums);

// Use .unshift(0) and print the array.
nums.unshift(0);
console.log(nums);

// Use .shift() and print the array.
nums.shift();
console.log(nums);

// Merge [4, 5] into nums using .concat() and print it.
let nums2 = nums.concat([4, 5]);
console.log(nums2);

// From [10, 20, 30, 40, 50], extract [20, 30, 40] using .slice().
let nums3 = [10, 20, 30, 40, 50];
console.log(nums3.slice(1, 4));

// From [1, 2, 3, 4, 5], use .splice() to remove 3 and insert 99 in its place.
let nums4 = [1, 2, 3, 4, 5];
nums4.splice(2, 1, 99);
console.log(nums4);