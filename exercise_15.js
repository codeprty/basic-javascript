/*
Using Quotes
Create a variable named greeting that stores this exact text: 
Hello World
Use double quotes.
*/
let greeting = "Hello World";
console.log(greeting);

/*
Using Single Quotes
Create a variable named title that stores this text: 
JavaScript Beginner
Use single quotes.
*/
let title = 'JavaScript Beginner';
console.log(title);

/*
Quotes Inside Quotes
Create a variable named sentence that stores: 
He said "JavaScript is fun"
Use a valid string format so the code does not break.
*/
let sentence = 'He said "JavaScript is fun"';
console.log(sentence);

/*
Single Quotes Inside Double Quotes
Create a variable named announcement that stores:
Today's class is about strings
Use double quotes outside.
*/
let announcement = "Today's class is about strings";
console.log(announcement);

/*
Escape Characters
Store this string in a variable path using escape sequences (\\):
C:\Users\Student\Documents
*/
let path = "C:\\Users\\Student\\Documents";
console.log(path);

/*
New Line Escape
Create a string with a newline using \n:
Line 1
Line 2
Store it in twoLines.
*/
let twoLines = "Line 1\nLine 2";
console.log(twoLines);

/*
Template String (Backticks)
Create a variable name with your name.
Use a template literal to print:
Hello, my name is <your name>
*/
let name = "Anri Okita";
console.log(`Hello, my name is ${name}`);

/*
Multiline String (Backticks)
Create a variable paragraph that stores:
This is line one.
This is line two.
This is line three.
Use backticks.
*/
let paragraph = 
`This is line one.
This is line two.
This is line three.`
console.log(paragraph);

/*
Interpolation
Given:
let item = "Laptop";
let price = 2500;
Use template string interpolation to create this string:
The Laptop costs 2500 dollars.
Store it in message.
*/
let item = "Laptop";
let price = 2500;
let message = `The ${item} costs ${price} dollars.`;
console.log(message);

/*
Expression Substitution
let a = 10;
let b = 5;
Use a template literal to store this exact text in result:
The total is 15
(Where 15 is the result of a + b calculated inside ${ }.)
*/
let a = 10;
let b = 5;
let result = `The total is ${a + b}`;
console.log(result);
