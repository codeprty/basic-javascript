// Get last element
// Write a function expression getLast that takes an array and returns the last element.
const getLast = function(arr) {
    let lastElement = arr[arr.length - 1];
    return lastElement;
}

console.log(getLast([20, 40, 60]));

// Count characters
// Write a function expression countChars that takes a string and returns how many characters it has.
const countChars = function(str) {
    return str.length;
}

console.log(countChars("JavaScript"));

// Check positive
// Write a function expression isPositive that checks if a number is greater than 0. Return true or false.
const isPositive = function(x) {
    return x > 0;
}

console.log(isPositive(4));

// Reverse string
// Write a function expression reverseString that takes a string and returns it reversed.
const reverseString = function(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Double numbers
// Write a function expression doubleArray that takes an array of numbers and returns a new array with all numbers doubled.
const doubleArray = function(num) {
    const doubled = num.map(num => num * 2);
    return doubled;
}

console.log(doubleArray([2, 4, 6, 8]));