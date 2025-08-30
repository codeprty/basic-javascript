// Simple Return
// Write a function double(n) that returns n * 2.
// Store the result in a variable and print it.
let n = 3;

function double(n) {
    return n * 2;
}

let result = double(n);
console.log(result);

// Multiple Calculations with Return
// Write a function area(width, height) that returns the rectangle area.
// Use it to calculate area(5, 10) and then multiply the result by 2.
function area(width, height) {
    return width * height;
}

console.log(area(5, 10) * 2);

// Return Object
// Write a function getUser(name, age) that returns an object {name, age}.
// Store the returned object and print it.
function getUser(name, age) {
    return {name, age};
}

console.log(getUser("Anri Okita", 39));

// Return Early
// Write a function checkAge(age) that:
// Returns "Too young" if age < 18.
// Returns "Adult" otherwise.
function checkAge(age) {
    if (age < 18) return "Too young";
    return "Adult";
}

console.log(checkAge(19));

// Chaining Return Values
// Write a function add(a, b) that returns a sum.
// Write another function multiplyByTwo(num) that doubles a number.
// Combine them: multiplyByTwo(add(3, 4)).
function add(a, b) {
    return a + b;
}

function multiplyByTwo(num) {
    return num * 2;
}

console.log(multiplyByTwo(add(3, 4)));