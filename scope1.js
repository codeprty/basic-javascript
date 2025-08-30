// Global vs Local Override
// • Create a global variable message = "Hello".
// • Inside a function, declare another message = "Hi".
// • Print both inside and outside the function.
// • Observe the difference.
let msg = "Hello";

function greeting() {
    let msg = "Hi";
    console.log(msg);
}

greeting();
console.log(msg);

// Block Scope with let
// • Write a loop for (let i = 0; i < 3; i++) { console.log(i) }.
// • Try printing i outside the loop (should give error).
for (let i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i); /* This will throw an error */

// Block Scope with var
// • Repeat the same loop but with var i = 0;.
// • Try printing i outside the loop (should still work).
for (var i = 0; i < 3; i++) {
    console.log(i);
}

console.log(i);

// Nested Functions
// Write a function outer() with a variable x = 5.
// Inside it, write another function inner() that tries to access x.
// Print from both functions to see scope inheritance.
function outer() {
    let x = 5;
    function inner() {
        console.log("Inner:", x);
    }
    console.log("Outer:", x);
    inner();
}

outer();

// Shadowing Variables
// • Create a global variable num = 10.
// • Inside a function, declare another variable num = 20.
// • Print inside and outside the function.
// • Notice how the local variable “shadows” the global one.
let num = 10;

function shadowing() {
    let num = 20;
    console.log(num);
}

shadowing();
console.log(num);