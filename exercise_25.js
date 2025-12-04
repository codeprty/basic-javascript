/*
Number types - integers and decimals
Create two variables:
• a as an integer 10
• b as a decimal 3.14
Print both variables and their sum.
*/
let a = 10;
let b = 3.14;
console.log(a + b);

/*
Large and small numbers (scientific/exponent notation)
Create two variables:
• big as 1.23e6
• small as 4.56e-3
Print both variables.
*/
let big = 1.23e6;
let small = 4.56e-3;
console.log(big);
console.log(small);

// Floating point arithmetic
// Add 0.1 + 0.2 and print the result.
// Check if it equals 0.3 using ==.
let floatSum = 0.1 + 0.2;
console.log(floatSum); // Output: 0.30000000000000004
console.log(floatSum == 0.3); // Output: false

// Operator precedence
// Evaluate and print the result of:
// let result = 10 + 5 * 2 - 8 / 4;
let result = 10 + (5 * 2) - (8 / 4);
console.log(result);

// BigInt
// Create a BigInt variable bigNumber with value 9007199254740991n.
// Add 1n to it and print the result.
let bigNumber = 9007199254740991n;
console.log(bigNumber + 1n);

// Number() conversion
// Convert the string "123" to a number using the Number() function and print it.
let str = "123";
console.log(Number(str));

// Numeric strings
// Add "100" + "50" as strings and print the result.
// Then convert them to numbers and print the sum.
console.log("100" + "50"); // Output: 10050
console.log(Number("100") + Number("50")); // Output: 150

/*
Boolean comparisons with numbers
Check and print the result of:
• true == 1
• false == 0
• true + 2
*/
console.log(true == 1); // Output : true
console.log(false == 0); // Output: true
console.log(true + 2); // Output: 3

// NaN — arithmetic with non-numeric string
// Try adding "abc" + 5 and print the result.
// Then subtract 5 from "abc" and print the result.
console.log("abc" + "5"); 
console.log("abc" - 5);

// NaN — arithmetic with numeric string
// Add "10" - 5 and "10" + 5 and print both results.
// Explain why they are different.
console.log("10" - 5); // "10" - 5 converts the string to number → 5
console.log("10" + 5); // "10" + 5 concatenates → "105"
