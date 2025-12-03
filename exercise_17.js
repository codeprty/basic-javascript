// Basic search
// Given word = "JavaScript";
// Use .indexOf("S") and print the result.
let word = "JavaScript";
console.log(word.indexOf("S"));

// Search starting position
// Given text = "banana";
// Use .indexOf("a", 2) and print the result.
let text = "banana";
console.log(text.indexOf("a", 2));

// Word search
// Given sentence = "Coding is fun and coding helps you learn";
// Use .indexOf("coding"); Print the result and observe the index.
let sentence = "Coding is fun and coding helps you learn";
console.log(sentence.indexOf("coding")); // Output: 18

// Find the last occurrence
// Given phrase = "Hello Hello World";
// Use .lastIndexOf("Hello") and print the result.
let phrase = "Hello Hello World";
console.log(phrase.lastIndexOf("Hello"));

// Using lastIndexOf with letters
// Given fruit = "pineapple";
// Use .lastIndexOf("p") to get the last occurrence of "p".
let fruit = "pineapple";
console.log(fruit.lastIndexOf("p"));

// Not found case
// Given message = "Welcome";
// Use .lastIndexOf("z") and print the result.
let message = "Welcome";
console.log(message.lastIndexOf("z"));

// Basic search
// Given text = "JavaScript";
// Use .search("Script") and print the result.
text = "JavaScript";
console.log(text.search("Script"));

// Search for a letter
// Given word = "Developer";
// Use .search("e") and print the result.
word = "Developer";
console.log(word.search("e"));

// Search case sensitivity
// Given sentence = "Learning JavaScript is fun";
// Use .search("javascript") and print the result.
sentence = "Learning JavaScript is fun";
console.log(sentence.search("javascript"));

/*
Mixed - indexOf(), lastIndexOf(), search()
Given message = "FrontEnd Developer FrontEnd";
1. Use .indexOf("End") to find the first occurrence.
2. Use .lastIndexOf("End") to find the last occurrence.
3. Use .search("Developer") to find where "Developer" starts.
Print all three results.
*/
message = "FrontEnd Developer FrontEnd";
console.log(message.indexOf("End"));
console.log(message.lastIndexOf("End"));
console.log(message.search("Developer"));
