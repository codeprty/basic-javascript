// Basic lowercase
// Given text = "JAVASCRIPT";
// Convert the string to all lowercase and print the result.
let text = "JAVASCRIPT";
console.log(text.toLowerCase());

// Mixed case word
// Given word = "DeVeLoPeR";
// Convert it to all lowercase and print the result.
let word = "DeVeLoPeR";
console.log(word.toLowerCase());

// Sentence to lowercase
// Given sentence = "I LOVE CODING";
// Convert the sentence to lowercase and print the result.
let sentence = "I LOVE CODING";
console.log(sentence.toLowerCase());

// Single character
// Given letter = "A";
// Convert the letter to lowercase and print the result.
let letter = "A";
console.log(letter.toLowerCase());

// Basic uppercase
// Given text = "javascript";
// Convert the string to all uppercase and print the result.
text = "javascript";
console.log(text.toUpperCase());

// Mixed case word
// Given word = "developer";
// Convert it to uppercase and print the result.
word = "developer";
console.log(word.toUpperCase());

// Sentence to uppercase
// Given sentence = "I love coding";
// Convert the sentence to uppercase and print the result.
sentence = "I love coding";
console.log(sentence.toUpperCase());

// Single character
// Given letter = 'b';
// Convert the letter to uppercase and print the result.
letter = 'b';
console.log(letter.toUpperCase());

/*
Mixed — toLowerCase(), toUpperCase()
Given message = "JavaScript is Fun";
1. Convert the entire message to lowercase.
2. Convert the entire message to uppercase.
Print both results.
*/
let message = "JavaScript is Fun";
console.log(message.toLowerCase());
console.log(message.toUpperCase());

/*
Mixed — toLowerCase(), toUpperCase()
Given title = "FrontEnd Developer";
Convert the first word "FrontEnd" to lowercase.
Convert the second word "Developer" to uppercase.
Print both results separately.
*/
let title = "FrontEnd Developer";
let words = title.split(" ");
console.log(words[0].toLowerCase());
console.log(words[1].toUpperCase());
