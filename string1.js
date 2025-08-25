// Count Characters
// Store "JavaScript" in a variable and print the number of characters.
let g = "Javascript";
console.log(g.length);

// Reverse String
// Store "hello" and print it backwards → "olleh".
let h = "hello";
console.log(h.split("").reverse().join(""));

// Count Vowels
// Store "programming" and count how many vowels (a, e, i, o, u) are inside.
let vowels = "programming";
let count = (vowels.match(/[aeiou]/gi)).length;
console.log(count);

// Palindrome Checker
// Store "madam" and check if it reads the same forward and backward (palindrome).
let str = "madam";

if (str === str.split("").reverse("").join("")) {
    console.log(`"${str}" is a palindrome`);
} else {
    console.log(`"${str}" is not a palindrome`);
};