// Array of Numbers
// Store [10, 20, 30, 40, 50] in an array and print each element.
// Method 1
let a = [10, 20, 30, 40, 50];

console.log(...a);

// Method 2
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
};

// Method 3
a.forEach(num => console.log(num));

// Sum of Array
// Store [1, 2, 3, 4, 5] in an array and calculate the sum of all numbers.
// Method 1
let b = [1, 2, 3, 4, 5];
let sum = b[0] + b[1] + b[2] + b[3] + b[4];

console.log(sum);

// Method 2
let c = [1, 2, 3, 4, 5];
let sum2 = 0;

for (let j = 0; j < c.length; j++) {
    sum2 += c[j];
};

console.log(sum2);

// Find Maximum
// Store [45, 12, 78, 34, 90] in an array and print the largest number.
let d = [45, 12, 78, 34, 90];
let max = Math.max(...d);
console.log("Largest number:", max);

// Reverse Array
// Store [1, 2, 3, 4, 5] in an array and print it in reverse order.
// Method 1
let e = [1, 2, 3, 4, 5];
console.log(e.reverse());

// Method 2
let f = [1, 2, 3, 4, 5];
console.log(f.slice().reverse());