// Reverse a String
// Write a function reverseString(str) that takes a string and returns it reversed.
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

// Check Palindrome
// Write a function isPalindrome(str) that checks if a string is a palindrome (reads the same forward and backward).
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("world"));

// Capitalize Words
// Write a function capitalizeWords(str) that capitalizes the first letter of each word.
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word ? word[0].toUpperCase() + word.slice(1) : "")
        .join(" ");
}

console.log(capitalizeWords("i love javascript"));

// Find the Longest Word
// Write a function longestWord(sentence) that returns the longest word in a sentence.
function longestWord(sentence) {
    return sentence
        .split(" ")
        .reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(longestWord("I love programming in JavaScript"));

// Character Frequency Counter
// Write a function charCount(str) that returns an object with the frequency of each character in the string.
function charCount(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

console.log(charCount("hello"));