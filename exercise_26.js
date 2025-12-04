// Basic safe integer
// Given num = 500;
// Use Number.isSafeInteger() to check if num is a safe integer. Print the result.
let num = 500;
console.log(Number.isSafeInteger(num));

// Unsafe integer
// Given big = 9007199254740993;
// Check if it's a safe integer. Print the result.
// (Hint: this number is larger than JavaScript’s safe range.)
let big = 9007199254740993;
console.log(Number.isSafeInteger(big));

// String integer
// Given value = "123";
// Check if it's a safe integer using isSafeInteger. Print the result.
let value = "123";
console.log(Number.isSafeInteger(value));

// Basic decimal extraction
// GIven str = "3.14";
// Use parseFloat() to convert it into a number. Print the result.
let str = "3.14";
console.log(Number.parseFloat(str));

// Extract float from text
// Given text = "Price: 45.67 USD";
// Use parseFloat() and print the result.
let text = "Price: 45.67 USD";
console.log(Number.parseFloat(text));

// Leading integer + decimals
// Given data = "100.99abc";
// Use parseFloat() and print the result.
// (Hint: parseFloat stops at the first invalid character.)
let data = "100.99abc";
console.log(Number.parseFloat(data));

// Basic integer extraction
// Given str = "42";
// Use parseInt() to convert it to a number. Print the result.
str = "42";
console.log(Number.parseInt(str));

// Integer from mixed string
// Given value = "55px";
// Use parseInt() and print the result.
value = "55px";
console.log(Number.parseInt(value));

// parseInt with second argument (radix)
// Given binary = "1010"; (binary for 10)
// Use parseInt(binary, 2) to convert it to a decimal number.
// Print the result.
let binary = "1010";
console.log(Number.parseInt(binary, 2));

/*
Mixed - isSafeInteger, parseFloat, parseInt
Given a = "256.75px";
Do the following:
1. Use parseInt(a) and print the result.
2. Use parseFloat(a) and print the result.
3. Check if parseInt(a) is a safe integer using isSafeInteger().
*/
let a = "256.75px";
console.log(Number.parseInt(a));
console.log(Number.parseFloat(a));
console.log(Number.isSafeInteger(parseInt(a)));
