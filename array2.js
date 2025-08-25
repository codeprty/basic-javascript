// Array of Fruits
// Store ["apple", "banana", "cherry", "date", "fig"] in an array and print each fruit.
let fruit = ["apple", "banana", "cherry", "date", "fig"]

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
};

// Array Average
// Store [5, 10, 15, 20, 25] in an array and calculate the average value.
let arr = [5, 10, 15, 20, 25];
let sum = 0;

for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
};

let avg = sum / arr.length;
console.log(avg);

// Find Minimum
// Store [12, 45, 7, 89, 23] in an array and print the smallest number.
// Method 1
let num = [12, 45, 7, 89, 23];
let min = Math.min(...num);
console.log("Smallest number:", min);

// Method 2
let small = num[0];

for (let k = 1; k < num.length; k++) {
    if (num[k] < small) {
        small = num[k];
    };
};

console.log("Smallest number:", small);

// Manual Reverse Array
// Store [10, 20, 30, 40, 50] and print it in reverse order without using .reverse().
let reverse = [10, 20, 30, 40, 50];

for (let l = reverse.length - 1; l >= 0; l--) {
    console.log(reverse[l]);  
};