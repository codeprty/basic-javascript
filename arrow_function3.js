// Double a number
// Write an arrow function double that takes a number and returns it multiplied by 2.
const double = num => num * 2;
console.log(double(7));

// Get array length
// Write an arrow function getLength that takes an array and returns how many elements it has.
const getLength = arr => arr.length;
console.log(getLength(["burger", "fries", "cola"]));

// Last character of string
// Write an arrow function lastChar that takes a string and returns its last character.
const lastChar = str => str[str.length - 1];
console.log(lastChar("Javascript"));

// Filter even numbers
// Write an arrow function filterEvens that takes an array of numbers and returns a new array with only the even numbers.
const filterEvens = arr => arr.filter(num => num % 2 === 0);
console.log(filterEvens([1, 2, 3, 4, 5,]));

// Word count
// Write an arrow function wordCount that takes a sentence (string with spaces) and returns how many words it has.
const wordCount = str => str.split(" ").length
console.log(wordCount("I am batman!"));