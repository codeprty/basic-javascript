// String Replace
// Store "I like cats" and replace "cats" with "dogs".
let str = "I like cats";
console.log(str.replace(/cats/g,"dogs"));

// Title Case String
// Store "javascript is awesome" and print "Javascript Is Awesome" (first letter of each word uppercase).
let sentence = "javascript is awesome";
let words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
};

console.log(words.join(" "));

// Check Substring
// Store "hello world". Check if the string contains "world". Print true/false.
let text = "hello world";
console.log(text.includes("world"));

// Longest Word
// Store "I love programming in JavaScript". Find the longest word in the sentence.
let sentence2 = "I love programming in Javascript";
let words2 = sentence2.split(" ");
let longest = "";

for (let j = 0; j < words2.length; j++) {
    if (words2[j].length > longest.length) {
        longest = words2[j];
    };
};

console.log(`"${longest}" is the longest word.`);