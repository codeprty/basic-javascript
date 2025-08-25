// Minimum of Two Numbers
// Write a program that compares two numbers and prints the smaller one.
let a = 26;
let b = 19;

if (a < b) {
    console.log(`${a} is smaller`);
} else if (b < a) {
    console.log(`${b} is smaller`);
} else {
    console.log("They are equal")
};

// Absolute Value
// Write a program that prints the absolute value of a number (e.g., -7 → 7, 5 → 5).
// Method 1
let num = -7;

if (num < 0) {
    console.log(-num);
} else {
    console.log(num);
};

// Method 2
let num2 = -8;
console.log(Math.abs(num2));

// Pass or Fail
// If a student’s score is ≥ 50, print "Pass", otherwise "Fail".
let score = 49;

if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
};

// Day of the Week (Number → Name)
// Store a number 1–7 in a variable. If it’s 1, print "Monday", if 2 → "Tuesday", … if 7 → "Sunday".
let day = 6;

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day ===6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid day number");
};

// Number in Range
// Check if a number is between 10 and 20 (inclusive). If yes, print "In range", otherwise "Out of range".
let number = 16;

if (number >= 10 && number <= 20) {
    console.log("In range")
} else {
    console.log("Out of range")
};