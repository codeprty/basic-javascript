// Multiply Function
// Write a function multiply(a, b) that returns the product of two numbers.
function multiply(a, b) {
    return a * b;
};
console.log(multiply(2, 3));

// Full Name Function
// Write a function fullName(first, last) that returns "First Last".
function fullName(first, last) {
    return `${first} ${last}`;
};
console.log(fullName("John", "Doe"));

// Area of Rectangle
// Write a function area(length, width) that returns the area of a rectangle.
function area(length, width) {
    return length * width;
};
console.log(area(3, 5));

// String Contains Function
// Write a function containsWord(sentence, word) that checks if word exists inside sentence. Return true or false.
function containsWord(sentence, word) {
    return sentence.includes(word);
};
console.log(containsWord("Hello world", "world"));
console.log(containsWord("Hello world", "cat"));

// Power Function
// Write a function power(base, exponent) that returns base raised to the power of exponent.
// Method 1
function power(base, exponent) {
    return base ** exponent;
};
console.log(power(2, 3));

// Method 2
function power(base, exponent) {
    return Math.pow(base, exponent);
};
console.log(power(2, 3));