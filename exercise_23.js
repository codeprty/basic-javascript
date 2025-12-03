// Basic padding
// Given num = "5";
// Pad the string so its length becomes 3 by adding "0" at the start. Print the result.
let num = "5";
console.log(num.padStart(3, "0"));

// Padding a word
// Given word = "Hi";
// Use .padStart() to make the string length 5 by adding "*" at the start. Print the result.
let word = "Hi";
console.log(word.padStart(5, "*"));

// Padding a number string
// Given code = "42";
// Pad it with "-" at the start to make it 6 characters long. Print the result.
let code = "42";
console.log(code.padStart(6, "-"));

// Single character padding
// Given letter = "A";
// Pad it with "0" at the start to make it 4 characters long. Print the result.
let letter = "A";
console.log(letter.padStart(4, "0"));

// Basic padding
// Given num = "5";
// Pad the string so its length becomes 3 by adding "0" at the end. Print the result.
num = "5";
console.log(num.padEnd(3, "0"));

// Padding a word
// Given word = "Hi";
// Use .padEnd() to make the string length 5 by adding "*" at the end. Print the result.
word = "Hi";
console.log(word.padEnd(5, "*"));

// Padding a number string
// Given code = "42";
// Pad it with "-" at the end to make it 6 characters long. Print the result.
code = "42";
console.log(code.padEnd(6, "-"));

// Single character padding
// Given letter = "A";
// Pad it with "0" at the end to make it 4 characters long. Print the result.
letter = "A";
console.log(letter.padEnd(4, "0"));

/*
Mixed — padStart(), padEnd()
Given message = "7";
1. Pad it at the start with "0" to make it length 3.
2. Pad it at the end with "*" to make it length 5.
Print both results.
*/
let message = "7";
console.log(message.padStart(3, "0"));
console.log(message.padEnd(5, "*"));

/*
Mixed — padStart(), padEnd()
Given code = "42";
1. Pad it at the start with "0" to make it 4 characters.
2. Pad it at the end with "-" to make it 6 characters.
Print both results.
*/
code = "42";
console.log(code.padStart(4, "0"));
console.log(code.padEnd(6, "-"));
