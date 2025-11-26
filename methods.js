// Uppercase/Lowercase
// Given "hello world" and "HELLO WORLD", print each in uppercase and then in lowercase.
const strUpper = "hello world";
console.log(strUpper.toUpperCase());
const strLower = "HELLO WORLD";
console.log(strLower.toLowerCase());

// Includes / Starts / Ends
// Check if the string "JavaScript Basics" includes "Script", starts with "Java", and ends with "ics".
const str = "JavaScript Basics";
console.log(`Include "Script": ${str.includes("Script")}`);
console.log(`Starts with "Java": ${str.startsWith("Java")}`);
console.log(`Ends with "ics": ${str.endsWith("ics")}`);

// IndexOf / LastIndexOf
// With "bananas", find the first index of "a" and the last index of "a".
const fruit = "bananas";
console.log(`First index of "a": ${fruit.indexOf("a")}`);
console.log(`Last index of "a": ${fruit.lastIndexOf("a")}`);

// Slice
// From "Hello World", use slice() to extract "World".
const text = "Hello World";
console.log(text.slice(6, 11));

// Substring
// From "ABCDEFGHIJ", use substring() to get "CDE".
const letters = "ABCDEFGHIJ";
console.log(`Substring: ${letters.substring(2, 5)}`);

// Split
// Split "red,green,blue" into an array ["red","green","blue"].
const colors = "red,green,blue";
console.log(colors.split(","));

// Join
// Join ["I","love","JS"] into the string "I-love-JS" (use a hyphen).
const arr = ["I","love","JS"];
console.log(arr.join("-"));

// Trim
// Remove extra spaces from " spaced text " and print the cleaned string.
const string = " spaced text ";
console.log(string.trim());

// Replace (single)
// Replace "cat" with "dog" in "I have a cat".
const pet = "I have a cat";
console.log(pet.replace("cat", "dog"));

// Replace (all)
// Replace all spaces with "-" in "make it url friendly" with split() and join().
const sentence = "make it url friendly";
console.log(sentence.split(" ").join("-"));

// Word Count
// Count how many words are in "I love programming in JavaScript" (assume single spaces).
const words = "I love programming in JavaScript";
console.log(`Word Count: ${words.split(" ").length}`);

// Title Case
// Convert "javascript is awesome" to "Javascript Is Awesome".
const title = "javascript is awesome";
const convert = title
    .split(" ") // split into words
    .map(word => word[0].toUpperCase() + word.slice(1)) //capitalize first letter
    .join(" "); // join back into string
console.log(convert);

// charAt / charCodeAt
// From "Hello", print the character at index 1 and its Unicode value.
const chars = "Hello";
console.log(`Character at index 1: ${chars.charAt(1)}`);
console.log(`Unicode value: ${chars.charCodeAt(1)}`);

// Concat
// Join "Java" and "Script" into one string using concat().
const str1 = "Java";
const str2 = "Script";
console.log(str1.concat(str2));

// Repeat
// Print "ha" repeated 3 times.
const laugh = "ha";
console.log(laugh.repeat(3));
