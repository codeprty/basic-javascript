// Multiply numbers
// Write a function expression multiply that takes two numbers and returns their product.
const multiply = function(a, b) {
    return a * b;
}

console.log(multiply(5, 6));

// Find the maximum
// Write a function expression max that takes two numbers and returns the larger one.
const max = function(c, d) {
    let num = Math.max(c, d);
    return num;
}

console.log(max(8, 3));

// Capitalize a word
// Write a function expression capitalize that takes a string and returns it with the first letter uppercase.
const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello"));

// Array sum
// Write a function expression sumArray that takes an array of numbers and returns the sum of all numbers.
const sumArray = function(arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));

// Custom greeting
// Write a function expression greetUser that takes a name and a timeOfDay (like "morning", "afternoon", "evening") and prints:
// "Good <timeOfDay>, <name>!"
const greetUser = function(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}!`;
}

console.log(greetUser("Alice", "evening"));