// Basic check
// Given word = "JavaScript";
// Check if word starts with "Java" and print the result.
let word = "JavaScript";
console.log(word.startsWith("Java"));

// Case sensitivity
// Given text = "Developer";
// Check if text starts with "developer" (all lowercase) and print the result.
let text = "Developer";
console.log(text.startsWith("developer"));

// Start from a specific position
// Given sentence = "I love coding";
// Check if the substring starting at index 7 starts with "coding" and print the result.
let sentence = "I love coding";
console.log(sentence.startsWith("coding", 7));

// Single character check
// Given code = "ABC";
// Check if code starts with "A" and print the result.
let code = "ABC";
console.log(code.startsWith("A"));

// Basic check
// Given word = "JavaScript";
// Check if word ends with "Script" and print the result.
word = "JavaScript";
console.log(word.endsWith("Script"));

// Case sensitivity
// Given text = "Developer";
// Check if text ends with "LOPER" and print the result.
text = "Developer";
console.log(text.endsWith("LOPER"));


// Check last few characters
// Given sentence = "I love coding";
// Check if the substring ending at index 5 ends with "love" and print the result.
sentence = "I love coding";
console.log(sentence.endsWith("love", 5));

// Single character check
// Given code = "XYZ";
// Check if code ends with "Z" and print the result.
code = "XYZ";
console.log(code.endsWith("Z"));

// Mixed - startsWith(), endsWith()
// Given message = "FrontEnd Developer";
// Check if message starts with "Front" and ends with "Developer". Print both results.
let message = "FrontEnd Developer";
console.log(message.startsWith("Front"));
console.log(message.endsWith("Developer"));

// Mixed - startsWith(), endsWith()
// Given title = "JavaScript Guide";
// Check if title starts with "Java" from index 0 and ends with "Guide" from the full string. Print both results.
let title = "JavaScript Guide";
console.log(title.startsWith("Java", 0));
console.log(title.endsWith("Guide"));
