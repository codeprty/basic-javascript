// Square a number
// Write an arrow function square that takes a number and returns its square.
const square = num => num * num;
console.log(square(5));

// Capitalize a word
// Write an arrow function capitalize that takes a word and returns it with the first letter uppercase.
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalize("hello"));

// Check if string is empty
// Write an arrow function isEmpty that returns true if a string has no characters, and false otherwise.
const isEmpty = str => str.length === 0;
console.log(isEmpty(""));
console.log(isEmpty("JS"));

// Get first element of array
// Write an arrow function getFirst that returns the first element of an array.
const getFirst = element => element[0];
console.log(getFirst([10, 20, 30]));

// Add exclamation
// Write an arrow function addExcitement that takes a string and returns it with "!" added at the end.
const addExcitement = str => str + "!";
console.log(addExcitement("Superman"));