// Constant Value
// Declare a constant gravity = 9.8.
// Try reassigning it to 10.
const gravity = 9.5;
gravity = 10; /* This will throw an error */
console.log(gravity);

// Counter with let
// Create a variable counter = 0 using let.
// Increment it 3 times and log the result.
let counter = 0;
for (let i = 0; i < 3; i++) {
    counter++;
}
console.log(counter);

// Array Mutation with const
// Declare a constant array fruits = ["apple", "banana"].
// Push "mango" into it and log the result.
const fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);

// Reassign vs Mutate
// Declare const numbers = [1, 2, 3].
// Add 4 into the array (mutation).
// Then try reassigning numbers = [10, 20, 30].
const numbers = [1, 2, 3];
numbers.push(4);
numbers = [10, 20, 30]; /* This will throw an error */
console.log(numbers);

// Loop Variable Choice
// Write a loop using let i = 0; i < 5; i++.
// Then try the same loop with const i = 0; i < 5; i++.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (const i = 0; i < 5; i++) {
    console.log(i); /* This will throw an error */
}