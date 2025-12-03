// Extract first 4 characters
// Given word = "JavaScript";
// Use .slice(0, 4) and print the result.
let word = "JavaScript";
console.log(word.slice(0, 4));

// Extract last 3 characters using negative indexes
// Given text = "Developer";
// Use .slice(-3) and print the result.
let text = "Developer";
console.log(text.slice(-3));

// Extract "Script"
// Given str = "JavaScript";
// Use .slice(4) to extract "Script" from the string.
let str = "JavaScript";
console.log(str.slice(4));

// Extract "Java"
// Given word = "JavaScript";
// Use .substring(0, 4) and print the result.
word = "JavaScript";
console.log(word.substring(0, 4));

// Swap start/end values
// Given name = "FrontEnd";
// Use .substring(6, 1); Print the output and observe what substring() does.
let name = "FrontEnd";
console.log(name.substring(6, 1)); // Output: rontE

// Extract last 4 characters (without negative numbers)
// Given fruit = "pineapple";
// Use .substring(5, 9) and print the result.
let fruit = "pineapple";
console.log(fruit.substring(5, 9));

// Split into words
// Given sentence = "JavaScript is fun";
// Split the string by spaces and print the resulting array.
let sentence = "JavaScript is fun";
console.log(sentence.split(" "));

// Split every character
// Given code = "ABC";
// Split into ["A", "B", "C"] using .split("").
let code = "ABC";
console.log(code.split(""));

// Split "apple,banana,kiwi"
// Given items = "apple,banana,kiwi";
// Use .split(",") to turn it into an array of fruits.
let items = "apple,banana,kiwi";
console.log(items.split(","));

/*
Mixed - slice(), substring(), split()
Given message = "Front End Development";
1. Use .slice(6) to extract "End Development".
2. Use .substring(0, 5) to extract "Front".
3. Use .split(" ") to split into separate words.
Print all results.
*/
let message = "Front End Development";
console.log(message.slice(6));
console.log(message.substring(0, 5));
console.log(message.split(" "));
