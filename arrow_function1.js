// Try converting these function expressions into arrow functions:

/*
const greet = function(name) {
  return `Hello, ${name}!`;
}
*/
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Anri Okita"));

/*
const multiply = function(a, b) {
  return a * b;
}
*/
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));

/*
const isEven = function(num) {
  return num % 2 === 0;
}
*/
const isEven = num => num %2 === 0;
console.log(isEven(4));

/*
const getLast = function(arr) {
  return arr[arr.length - 1];
}
*/
const getLast = (arr) => arr[arr.length-1];
console.log(getLast([1, 3, 5]));