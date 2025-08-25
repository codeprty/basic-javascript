// Even or Odd
// Write a program that checks if a number is even or odd.
let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
};

// Largest of Two Numbers
// Write a program that compares two numbers and prints the larger one.
let a = 15;
let b = 20;

if (a > b) {
    console.log(`${a} is larger`);
} else if (b > a) {
    console.log(`${b} is larger`);
} else {
    console.log("They are equal");
};

// Voting Eligibility
// Ask the user for their age (or store it in a variable). If age ≥ 18, print "You can vote!", otherwise "You are too young to vote."
let age = 21;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You are too young to vote.")
};

// Positive, Negative, or Zero
// Write a program that checks if a number is positive, negative, or zero.
let num = 9;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
};

// Grade Checker
// Store a score (0–100) in a variable, then print the grade:
let score = 92;

if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 60 && score <= 69) {
    console.log("D");
} else {
    console.log("E");
};