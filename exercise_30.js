// Function Intro
// Create a function greet that prints "Hello World" to the console.
function greet() {
    return "Hello World";
}
console.log(greet());

// Function Invocation
// Create a function sayHi and call it to print "Hi there!".
function sayHi() {
    console.log("Hi there!");
}
sayHi();

// Local Variables
// Create a function showNumber with a local variable num = 5 and print it.
function showNumber() {
    let num = 5;
    console.log(num);
}
showNumber();

// Parameters
// Create a function printName with a parameter name and print "Name: " followed by the name.
function printName(name) {
    console.log("Name: " + name);
}

// Arguments
// Call the printName function with your own name.
printName("Anri Okita");

// Multiple Parameters
// Create a function sum with parameters a and b and print their sum.
function sum(a, b) {
    return a + b;
}
console.log(sum(4, 6));

// Return Value
// Create a function double with a parameter n that returns n * 2. Call it and print the result.
function double(n) {
    console.log(n * 2);
}
double(4);

// Function as Variable
// Create a function multiply that returns the product of two numbers. 
// Assign it to a variable myFunc and call myFunc(2,3).
function multiply(a, b) {
    return a * b;
}
let myFunc = multiply;
console.log(myFunc(2, 3));

// Function Inside Function
// Create a function outer that calls another function inner which prints "Inside inner function".
function outer() {
    function inner() {
        console.log("Inside inner function");
    }
    inner();
}
outer();

// Mixed Function Check
// Create a function calculate that takes two numbers, adds them, and prints "Result: " followed by the sum.
function calculate(a, b) {
    let sum;
    sum = a + b;
    return "Result: " + sum;
}
console.log(calculate(6, 3));
