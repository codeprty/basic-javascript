// Calculate Average
// Write a function average(a, b, c) that returns the average of three numbers.
function average(a, b, c) {
    return (a + b + c) / 3;
};
console.log(average(4, 8, 10));

// Repeat String
// Write a function repeatString(str, times) that repeats the string str for times number of times and returns it.
function repeatString(str, times) {
    return str.repeat(times);
};
console.log(repeatString("hi", 3));

// Minimum of Two Numbers
// Write a function min(a, b) that returns the smaller number.
function min(a, b) {
    return Math.min(a, b);
};
console.log(min(7, 2));

// Starts With Letter
// Write a function startsWith(word, letter) that returns true if the word starts with the given letter, and false otherwise.
function startsWith(word, letter) {
    return word[0].toLowerCase() === letter.toLowerCase();
};
console.log(startsWith("banana", "b"));
console.log(startsWith("apple", "b"));

// String Length Compare
// Write a function longerString(str1, str2) that returns the longer string. If they are equal, return "Same length".
function longerString(str1, str2) {
    if (str1.length > str2.length) return str1;
    if (str2.length > str1.length) return str2;
    return "Same length";
};
console.log(longerString("cat", "house"));
console.log(longerString("dog", "bat"));