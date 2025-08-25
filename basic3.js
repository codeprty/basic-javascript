/*
Ask the user for their name (use prompt in the browser, or just store it in a variable if you run in Node). Then print:
"Hello, [name]! Your name has [X] characters."
*/
let name = "Anri Okita";
let chars = name.length;
console.log(`Hello, ${name}! Your name has ${chars} characters.`);

/*
Store two numbers in variables. Print out:
• Their sum
• Their difference
• Their product
• Their quotient
• Their remainder
*/
let num1 = 5;
let num2 = 2;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;

console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
console.log(`Product: ${product}`);
console.log(`Quotient: ${quotient}`);
console.log(`Remainder: ${remainder}`);