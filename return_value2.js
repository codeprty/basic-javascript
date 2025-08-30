// Return String Manipulation
// Write a function capitalize(word) that returns the word with the first letter capitalized.
// Example: capitalize("hello") → "Hello"
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(capitalize("hello"));

// Return Array
// Write a function getEvens(arr) that returns a new array containing only the even numbers.
// Example: getEvens([1, 2, 3, 4, 5]) → [2, 4]
function getEvens(arr) {
    return arr.filter((num) => num % 2 === 0);
}

console.log(getEvens([1, 2, 3, 4, 5]));

// Return Multiple Values (Object)
// Write a function getStats(numbers) that returns an object with:
// min = smallest number
// max = largest number
// sum = total of all numbers
// Example: getStats([1, 5, 3]) → {min: 1, max: 5, sum: 9}
function getStats(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = numbers.reduce((acc, num) => acc + num, 0);

    return { min, max, sum };
}

console.log(getStats([1, 5, 3])); 

// Return with Default Parameters
// Write a function greet(name = "Guest") that returns "Hello, <name>!".
// Example: greet("Alice") → "Hello, Alice!"
// Example: greet() → "Hello, Guest!"
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet());

// Return with Early Exit
// Write a function safeDivide(a, b) that:
// Returns "Cannot divide by 0" if b === 0.
// Otherwise, returns a / b.
// Example:
// safeDivide(10, 2) → 5
// safeDivide(10, 0) → "Cannot divide by 0"
function safeDivide(a, b) {
    if (b === 0) return "Cannot divide by 0";
    return a /b;
}

console.log(safeDivide(10, 2));
console.log(safeDivide(10, 0));