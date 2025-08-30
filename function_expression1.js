/*
Convert this function declaration into a function expression:
    function sayHello() {
        console.log("Hello!");
    }
*/
const greet = function() {
    console.log("Hello!");
}

greet();

// Write a function expression that takes two numbers and returns their sum.
const add = function(a, b) {
    return a + b;
}

console.log(add(3, 4));

// Write a function expression stored in a variable called isEven that checks if a number is even.
const isEven = function(x) {
    return x % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));