/*
Leap Year Checker
Store a year in a variable. A year is a leap year if:
• It’s divisible by 4,
• BUT not divisible by 100,
• OR divisible by 400.
Print "Leap year" or "Not a leap year".
*/
let year = 2004;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
};

// Maximum of Three Numbers
// Store three numbers and print the largest one.
let num1 = 30;
let num2 = 70;
let num3 = 10;

if (num1 > num2 && num1 > num3) {
    console.log(`Largest number: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
    console.log(`Largest number: ${num2}`);
} else if (num3 > num1 && num3 > num2) {
    console.log(`Largest number: ${num3}`);
};

// Simple Calculator
// Store two numbers and an operator (+, -, *, /).
// Use if statements to perform the correct calculation. Example: if operator is "+", add the two numbers.
let number1 = 14;
let number2 = 7;
let operator = "+";

if (operator === "+") {
    let sum = number1 + number2;
    console.log(`${sum} = ${number1} + ${number2}`);
} else if (operator === "-") {
    let difference = number1 - number2;
    console.log(`${difference} = ${number1} - ${number2}`);
} else if (operator === "*") {
    let multiply = number1 * number2;
    console.log(`${multiply} = ${number1} * ${number2}`);
} else if (operator === "/") {
    let division = number1 / number2;
    console.log(`${division} = ${number1} / ${number2}`);
} else {
    console.log("Invalid operator");
};

/*
Character Checker
Store a character (like "a", "Z", "5", "#"). Check if it is:
• A letter (a–z or A–Z),
• A digit (0–9),
• Or a special character.
*/
let char = "7";

if (char.match(/[a-zA-Z]/)) {
    console.log(`"${char}" is a letter.`);
} else if (char.match(/[0-9]/)) {
    console.log(`"${char}" is a digit.`);
} else {
    console.log(`"${char}" is a special character.`);
};

/*
Triangle Type Checker
Store three sides of a triangle. Print whether it is:
• "Equilateral" (all sides equal),
• "Isosceles" (two sides equal),
• "Scalene" (all sides different).
*/
let side1 = 15;
let side2 = 25;
let side3 = 25;

if (side1 === side2 && side1 === side3) {
    console.log("Equilateral");
} else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log("Isosceles");
} else {
    console.log("Scalene");
};