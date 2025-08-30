// map()
// Use .map() to square every number in [1, 2, 3, 4].
// Expected output: [1, 4, 9, 16]
let squareArr = [1, 2, 3, 4];
let squareOutput = squareArr.map((num) => num * num);
console.log(squareOutput);

// filter()
// Use .filter() to get only even numbers from [1, 2, 3, 4, 5, 6].
// Expected output: [2, 4, 6]
let evenArr = [1, 2, 3, 4, 5, 6];
let evenOutput = evenArr.filter((num) => num % 2 === 0);
console.log(evenOutput);

// reduce()
// Use .reduce() to sum all numbers in [10, 20, 30, 40].
// Expected output: 100
let reduceArr = [10, 20, 30, 40];
let reduceOutput = reduceArr.reduce((total, num) => total + num, 0);
console.log(reduceOutput);

// forEach()
// Use .forEach() to print each fruit in ["apple", "banana", "cherry"].
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => console.log(fruit));