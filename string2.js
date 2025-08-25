// Uppercase String
// Store "javascript is fun" and print it in uppercase.
let str = "javascript is fun";
console.log(str.toUpperCase());

// Count Specific Character
// Store "programming" and count how many times "m" appears.
// Method 1
let text = "programming";
let count = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === "m") {
        count++;
    };
};
console.log(count);

// Method 2
let count2 = (text.match(/m/g) || []).length;
console.log(count2);

// Check First and Last Character
// Store "level" and check if the first and last characters are the same.
let char = "level";

if (char[0] === char[char.length - 1]) {
    console.log("They are the same characters.");
} else {
    console.log("They are not the same characters.");
};

// Remove Spaces
// Store "I love coding" and remove all spaces → "Ilovecoding".
// Method 1
let str2 = "I love coding";
console.log(str2.replace(/ /g, ""));

// Method 2
let newStr = "";

for (let j = 0; j < str2.length; j++) {
    if (str2[j] !== " ") {
        newStr += str2[j];
    };
};
console.log(newStr);