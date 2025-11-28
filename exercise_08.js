// Basic Boolean Value
// Create a variable isReady = true. Log the value to the console.
let isReady = true;
console.log(isReady);

// Comparison → Boolean result
// Given age = 25; Log the result of age > 18.
let age = 25;
console.log(age > 18);

// Boolean from expression
// Given temperature = 40; Log whether temperature is greater than or equal to 35.
let temperature = 40;
console.log(temperature >= 35);

// Using Boolean() function
// Convert the string "hello" to a boolean using Boolean(). Log the result.
let strConvert = Boolean("hello");
console.log(strConvert);

// Boolean() with empty string
// Given text = ""; Convert it using Boolean(text) and log the output.
let text = "";
let output = Boolean(text);
console.log(output);

// Boolean() with number
// Given num = 0; Convert it to boolean using Boolean(num) and log the result.
let num = 0;
let result = Boolean(num);
console.log(result);

// Boolean as an object (NOT recommended but for learning)
// Create a Boolean object: let isValid = new Boolean(false);
// Log the value and describe (in a comment) whether it behaves like true or false in conditions.
let isValid = new Boolean(false);
console.log(isValid); // All objects in JavaScript are truthy, even if the value inside is false.

// Boolean in a condition
// Given isLoggedIn = true; Use it in an if statement to print "Access granted" only if it is true.
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Access granted");
}

/*
Comparison using ===
Given:
let x = 10;
let y = "10";
Log the result of:
x == y;
x === y;
*/
let x = 10;
let y = "10";
console.log(x == y);
console.log(x === y);

// Boolean NOT operator
// Given isDarkMode = false; Use !isDarkMode to log the opposite boolean value.
let isDarkMode = false;
console.log(!isDarkMode);
