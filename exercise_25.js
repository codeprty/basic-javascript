// Basic finite number
// Given x = 50;
// Use Number.isFinite() to check if x is a finite number. Print the result.
let x = 50;
console.log(Number.isFinite(x));

// Infinity check
// Given value = Infinity;
// Use Number.isFinite() to check if the value is finite. Print the result.
let value = Infinity;
console.log(Number.isFinite(value));

// String number check
// Given score = "100";
// Check whether it's finite using Number.isFinite() and print the result.
// (Hint: it returns false because the value is not a number type)
let score = "100";
console.log(Number.isFinite(score));

// Check integer
// Given num = 25;
// Use Number.isInteger() to check if num is an integer. Print the result.
let num = 25;
console.log(Number.isInteger(num));

// Decimal check
// Given price = 9.99;
// Check whether price is an integer using Number.isInteger() and print the result.
let price = 9.99;
console.log(Number.isInteger(price));

// Integer-like string
// Given age = "30";
// Check if it is an integer using Number.isInteger().
// Print the result. (Hint: it's false — string is not a number)
let age = "30";
console.log(Number.isInteger(age));

// NaN from invalid math
// Compute: let result = "abc" - 10;
// Use Number.isNaN() to check if result is NaN. Print the result.
let result = "abc" - 10;
console.log(Number.isNaN(result));

// Valid number check
// Given height = 180;
// Check with Number.isNaN() and print the result.
let height = 180;
console.log(Number.isNaN(height));

// NaN from direct value
// Check this value: Number.isNaN(NaN)
// Print the result.
console.log(Number.isNaN(NaN));

/*
Mixed — isFinite(), isInteger(), isNaN()
Given a = "200";
Check:
1. Is it finite?
2. Is it an integer?
3. Is it NaN?
Print all results.
*/
let a = "200";
console.log(Number.isFinite(a));
console.log(Number.isInteger(a));
console.log(Number.isNaN(a));
