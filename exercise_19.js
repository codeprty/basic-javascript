// Replace first occurrence
// Given message = "Hello World";
// Use .replace("World", "JavaScript") and print the result.
let message = "Hello World";
console.log(message.replace("World", "JavaScript"));

// Replace inside a sentence
// Given text = "I love coding. Coding is fun.";
// Use .replace("coding", "JavaScript") (case-sensitive!) and print the result.
let text = "I love coding. Coding is fun.";
console.log(text.replace("coding", "JavaScript"));

// Replace all occurrences
// Given sentence = "apple banana apple orange apple";
// Use .replaceAll("apple", "kiwi") and print the result.
let sentence = "apple banana apple orange apple";
console.log(sentence.replaceAll("apple", "kiwi"));

// Replace repeated characters
// Given word = "haha haha haha";
// Use .replaceAll("haha", "lol") and print the result.
let word = "haha haha haha";
console.log(word.replaceAll("haha", "lol"));

// Basic repeat
// Given laugh = "ha";
// Use .repeat(3) and print the result.
let laugh = "ha";
console.log(laugh.repeat(3));

// Repeat a word
// Given star = "*";
// Use .repeat(10) to create "**********" and print it.
let star = "*";
console.log(star.repeat(10));

/*
Join two strings
Given:
let first = "Hello";
let second = "World";
Use .concat(" ", second) to produce "Hello World".
*/
let first = "Hello";
let second = "World";
console.log(first.concat(" ", second));

/*
Concatenate three parts
Given:
let a = "Front";
let b = "End";
let c = "Developer";
Use a.concat(b, c) and print the result.
*/
let a = "Front";
let b = "End";
let c = "Developer";
console.log(a.concat(b, c));

/*
Mixed - replace(), repeat(), concat()
Given title = "JavaScript Tutorial Tutorial";
1. Use .replace("Tutorial", "Guide")
2. Then add "!" repeated 3 times using .repeat(3)
Print the final result.
*/
let title = "JavaScript Tutorial Tutorial";
let result = title.replace("Tutorial", "Guide").concat("!".repeat(3));
console.log(result);

/*
Mixed - replace(), concat()
Given message = "Hello Programming";
1. Use .replace("Programming", "JS")
2. Use .concat(" is fun")
Print the final message.
*/
message = "Hello Programming";
let finalMessage = message.replace("Programming", "JS").concat(" is fun");
console.log(finalMessage);
