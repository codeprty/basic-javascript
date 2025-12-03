// Remove spaces from both ends
// Given text = "   Hello World   ";
// Use .trim() and print the result.
let text = "   Hello World   ";
console.log(text.trim());

// Remove spaces from a single word
// Given word = "   JavaScript   ";
// Use .trim() and print the result.
let word = "   JavaScript   ";
console.log(word.trim());

// Trim a sentence with tabs
// Given sentence = "\tI love coding\t";
// Use .trim() and print the result.
let sentence = "\tI love coding\t";
console.log(sentence.trim());

// Remove leading spaces
// Given text = "   FrontEnd";
// Use .trimStart() and print the result.
text = "   FrontEnd";
console.log(text.trimStart());

// Remove leading tabs
// Given word = "\tDeveloper";
// Use .trimStart() and print the result.
word = "\tDeveloper";
console.log(word.trimStart());

// Leading spaces only
// Given sentence = "     Hello JavaScript";
// Use .trimStart() and print the result.
sentence = "     Hello JavaScript";
console.log(sentence.trimStart());

// Remove trailing spaces
// Given text = "BackEnd    ";
// Use .trimEnd() and print the result.
text = "BackEnd    ";
console.log(text.trimEnd());

// Remove trailing tabs
// Given word = "Coding\t\t";
// Use .trimEnd() and print the result.
word = "Coding\t\t";
console.log(word.trimEnd());

// Trailing spaces only
// Given sentence = "JavaScript     ";
// Use .trimEnd() and print the result.
sentence = "JavaScript     ";
console.log(sentence.trimEnd());

/*
Mixed - trimStart(), trimEnd(), trim()
Given message = "   Hello JavaScript   ";
1. Remove only leading spaces using .trimStart() and print.
2. Remove only trailing spaces using .trimEnd() and print.
3. Remove both leading and trailing spaces using .trim() and print.
*/
message = "   Hello JavaScript   ";
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.trim());