// Match a word
// Given text = "I love JavaScript"
// Use match() to find "Java" in text.
// Print only the matched string, not the full match object.
let text = "I love JavaScript";
console.log(text.match(/Java/g));

// Match a digit
// Given text = "My number is 7"
// Use match() with regex to find the digit.
// Print the result as an array of matches.
text = "My number is 7";
console.log(text.match(/\d/));

// Match multiple letters
// Given text = "Hello"
// Use match() to find all "l" letters.
// Print the array of matched letters.
text = "Hello";
console.log(text.match(/l/g));

// Match case-insensitive
// Given text = "JavaScript javascript JAVASCRIPT"
// Use match() with regex to find all "javascript" ignoring case.
// Print the array of matched strings.
text = "JavaScript javascript JAVASCRIPT";
console.log(text.match(/javascript/gi));

// Match all vowels
// Given text = "Hello World"
// Use matchAll() to find all vowels (a, e, i, o, u).
// Convert to array using spread operator and print the matches.
text = "Hello World";
let result = text.matchAll(/[aeiou]/gi);
console.log([...result]);

// Match all letter 'a'
// Given text = "banana"
// Use matchAll() to find all letter 'a'.
// Convert to array using Array.from() and print the matches.
text = "banana";
result = text.matchAll(/a/g);
console.log(Array.from(result));

// Match all words starting with 'c'
// Given text = "cat car dog cow"
// Use matchAll() to find all words starting with 'c'.
// Convert to array first, then use a for loop to print each matched word only.
text = "cat car dog cow";
result = Array.from(text.matchAll(/c\w+/g));
for (let i = 0; i < result.length; i++) {
  console.log(result[i][0]); // Print only the matched word
}

// Match all digits
// Given text = "I have 2 apples and 5 oranges"
// Use matchAll() to find all digits.
// Convert to array first, then use a for loop to print each digit only.
text = "I have 2 apples and 5 oranges";
result = Array.from(text.matchAll(/\d/g));
for (let i = 0; i < result.length; i++) {
  console.log(result[i][0]); // Print only the digit
}

// Match all uppercase letters
// Given text = "Hello World ABC"
// Use matchAll() to find all uppercase letters.
// Convert to array using spread operator and print the matches.
text = "Hello World ABC";
result = text.matchAll(/[A-Z]/g);
console.log([...result]);
