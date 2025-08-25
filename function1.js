// Simple Greeting Function
function greet(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Alice"));

// Square Function
function square(num) {
    return num * num;
};

console.log(square(5));

// Even or Odd
function isEven(num) {
    return num % 2 === 0;
};
console.log(isEven(8));
console.log(isEven(5));

// Find Maximum
function findMax(a, b, c) {
    return Math.max(a, b, c);
};
console.log(findMax(3, 8, 5));

// Reverse String Function
function reverseString(str) {
    return str.split("").reverse().join("");
};
console.log(reverseString("hello"));