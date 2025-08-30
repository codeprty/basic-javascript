// Upper/Lower
// Given "hello world", print it in UPPERCASE, then in lowercase.
let strUpper = "hello world";
console.log(strUpper.toUpperCase());

let strLower = "HELLO WORLD";
console.log(strLower.toLowerCase());

/*
Includes / Starts / Ends
With "JavaScript Basics":
• Check if it includes "Script".
• Check if it startsWith "Java".
• Check if it endsWith "ics".
*/
let str = "JavaScript Basics";
console.log(str.includes("Script"));
console.log(str.startsWith("Java"));
console.log(str.endsWith("ics"));

// IndexOf / LastIndexOf
// With "bananas", find the first index of "a" and the last index of "a".
let fruit = "bananas";
console.log(fruit.indexOf("a"));
console.log(fruit.lastIndexOf("a"));

// Slice
// From "Hello World", use .slice() to extract "World".
let text = "Hello World";
console.log(text.slice(6, 11));

// Substring
// From "ABCDEFGHIJ", use .substring() to get "CDE".
let chars = "ABCDEFGHIJ";
console.log(chars.substring(2, 5));

// Split
// Split "red,green,blue" into an array ["red","green","blue"].
let color = "red,green,blue";
console.log(color.split(","));

// Join
// Join ["I","love","JS"] into the string "I-love-JS" (use a hyphen).
let js = ["I","love","JS"];
console.log(js.join("-"));

// Trim
// Remove extra spaces from " spaced text " and print the cleaned string.
let clean = " spaced text ";
console.log(clean.trim());

// Replace (single)
// Replace "cat" with "dog" in "I have a cat" (replace only once).
let cat = "I have a cat";
console.log(cat.replace("cat", "dog"));

// Replace (all)
// Replace all spaces with "-" in "make it url friendly" without using regex-free tricks (use .split() and .join()).
let text2 = "make it url friendly";
console.log(text2.split(" ").join("-"));

// Word Count
// Count how many words are in "I love programming in JavaScript" (assume single spaces).
let text3 = "I love programming in JavaScript";
console.log(text3.split(" ").length);

// Title Case
// Convert "javascript is awesome" to "Javascript Is Awesome".
let sentence = "javascript is awesome";
let title = sentence
    .split(" ") // split into words
    .map(word => word[0].toUpperCase() + word.slice(1)) // capitalize first letter
    .join(" "); // join back into string
console.log(title);