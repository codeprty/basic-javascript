// Declare a variable age using let and set it to 20. 
// Then console.log(age).
let age = 20;
console.log(age);

// Create two variables firstName and lastName (use let), assign your name parts, 
// then make a fullName by joining them with a space and console.log(fullName).
let firstName = "Anri";
let lastName = "Okita";
let fullName = firstName + " " + lastName;
console.log(fullName);

// Declare a constant PI with value 3.14 (use const) and console.log(PI). 
// Then try to reassign PI = 3.14159 and observe what happens.
const PI = 3.14;
console.log(PI);
// PI = 3.14159; // Error

// Let a = 5 and b = 3. Swap their values using a third variable temp 
// so that a becomes 3 and b becomes 5. console.log(a, b) after the swap.
let a = 5, b = 3;
let temp = a;
a = b;
b = temp;
console.log(a, b);

// Declare price = 150 and quantity = 3. 
// Use variables to compute total (price × quantity) and console.log(total).
let price = 150;
let quantity = 3;
let total = price * quantity;
console.log(total);

// Start with let counter = 0. Then:
// increase it by 1 using the ++ operator and console.log,
// then increase it by 2 using += and console.log again.
let counter = 0;
counter++;
console.log(counter);
counter+=2;
console.log(counter);

// Use variables width = 8 and height = 5. 
// Calculate area and perimeter of the rectangle and console.log both results.
// Formula: 2 * (width + height)
const width = 8;
const height = 5;
let area = width * height;
let perimeter = 2 * (width + height);
console.log(area);
console.log(perimeter);

// Given let yearBorn = 2000 and let currentYear = 2025, 
// compute age by subtraction and console.log(currentAge).
let yearBorn = 2000;
let currentYear = 2025;
let currentAge = currentYear - yearBorn;
console.log(currentAge);

// Declare let isLoggedIn = false. Log its value, 
// then toggle it (assign the opposite boolean) and log again.
let isLoggedIn = false;
console.log(isLoggedIn);
isLoggedIn = !isLoggedIn;
console.log(isLoggedIn);
