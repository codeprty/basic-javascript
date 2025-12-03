// Basic index access
// Given word = "JavaScript";
// Use .at(0) to get the first letter and print it.
let word = "JavaScript";
console.log(word.at(0));

// Using negative index
// Using the same word, use .at(-1) to get the last character and print it.
console.log(word.at(-1));

// Getting a middle character
// Use .at(4) on the string "Developer" and print the result.
word = "Developer";
console.log(word.at(4));

// Basic usage
// Create let text = "Programming";
// Use .charAt(3) and print the character.
let text = "Programming";
console.log(text.charAt(3));

// Out-of-range index
// Use .charAt(50) on "Hello" and check what is printed.
text = "Hello";
console.log(text.charAt(50)); // Output: empty string

// Iterate and print each character
// Create a loop that uses .charAt(i) to print each character in "Game" one by one.
text = "Game";
for (let i = 0; i < text.length; i++) {
    console.log(text.charAt(i));
}

// Check a word
// Create let sentence = "JavaScript is awesome";
// Use .includes("awesome") and print the result.
let sentence = "JavaScript is awesome";
console.log(sentence.includes("awesome"));

// Case sensitivity
// Check if "Hello World".includes("world")
// Print the result and observe why.
sentence = "Hello World";
if (sentence.includes("world")) {
    console.log(sentence.includes("world")); // No result print
} 

// Search part of a word
// Create let fruit = "pineapple";
// Use .includes("apple") and print the result.
let fruit = "pineapple";
console.log(fruit.includes("apple"));

/*
Mixed - includes(), charAt(), at()
Given message = "FrontEnd";
1. Use .includes("End") to check if the string contains "End".
2. Use .charAt(2) to get the third character.
3. Use .at(-2) to get the second-last character.
Print all results.
*/
let message = "FrontEnd";
if (message.includes("End")) {
    console.log(message.includes("End"));
}
console.log(message.charAt(2));
console.log(message.at(-2));
