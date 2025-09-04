// Function with Default Parameters
// Write a function greet(name = "Guest") that returns "Hello, <name>!".
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));

// Return the Square of a Number
// Write a function square(num) that returns the square of a number.
function square(num) {
    return num * num;
    // return num ** 2; // Alternative
}

console.log(square(5));

// Higher-Order Function (Callback)
// Write a function applyOperation(a, b, operation) that takes two numbers and a function (like add or multiply), and applies it.
function applyOperation(a, b, operation) {
    return operation(a, b);
}

function add(x, y) { return x + y; }
function multiply(x, y) { return x * y; }

console.log(applyOperation(3, 4, add));
console.log(applyOperation(3, 4, multiply));

// Function Returning Another Function (Closure)
// Write a function makeMultiplier(factor) that returns another function which multiplies numbers by that factor.
function makeMultiplier(factor) {
    return function(num) {
        return num * factor;
    };
}

let double = makeMultiplier(2);
console.log(double(5));

let triple = makeMultiplier(3);
console.log(triple(5));

// Recursive Function: Factorial
// Write a recursive function factorial(n) that returns the factorial of n.
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); 