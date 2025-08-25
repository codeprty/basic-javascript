// Even or Odd (again, but with variation)
// Store a number and check if it’s even or odd. Print "Even" or "Odd".
let num = 9;

if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
};

// Minimum & Maximum of Two Numbers
// Store two numbers. Print which is the smaller one, and which is the larger one.
let a = 2;
let b = 4;

if (a > b) {
    console.log(`${a} is larger`);
    console.log(`${b} is smaller`)
} else if (b > a) {
    console.log(`${b} is larger`);
    console.log(`${a} is smaller`)
} else {
    console.log("They are equal");
};

// Absolute Value
// Store a number (negative or positive). Print its absolute value using if (don’t use Math.abs() yet).
let value = -6;

if (value < 0) {
    console.log(-value);
} else {
    console.log(value);
};

// Grade Checker (revisited)
// Store a score (0–100). Print the grade A, B, C, D, or F. (Same as before, but careful: remember to use && instead of || this time).
let score = 85;

if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 60 && score <= 69) {
    console.log("D");
} else if (score >=0 && score < 60) {
    console.log("F");
} else {
    console.log("Invalid score");
};

// Number in Range (variation)
// Store a number and check if it’s between -10 and 10 (inclusive). Print "In range" or "Out of range".
let number = -3;

if (number >= -10 && number <= 10) {
    console.log("In range");
} else {
    console.log("Out of range");
};