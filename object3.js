/*
Loop Through Keys
Create an object car with keys:
• make: "Toyota"
• model: "Corolla"
• year: 2020
Print each key and value using a for...in loop.
*/
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let x in car) {
    console.log(x, ":", car[x]);
};

// Check Key Exists
// Write a function hasKey(obj, key) that returns true if the key exists in the object, and false otherwise.
function hasKey(obj, key) {
    return key in obj;
};
console.log(hasKey(car, "model"));
console.log(hasKey(car, "color"));

// Count Properties
// Write a function countProperties(obj) that returns the number of properties in an object.
function countProperties(obj) {
    return Object.keys(obj).length;
};
console.log(countProperties(car));

/*
Nested Object
Create an object student with:
    name: "John"
    age: 22
    address: {
    city: "London",
    zip: "12345"
    }
Print only the city.
*/
let student = {
    name: "John",
    age: 22,
    address: {
        city: "London",
        zip: "12345"
    }
};
console.log(student.address.city);

/* 
Object with Array Values
Create an object library with:
    name: "City Library"
    books: ["1984", "Brave New World", "Fahrenheit 451"]
Print the second book.
*/
let library = {
    name: "City Library",
    books: ["1984", "Brave New World", "Fahrenheit 451"]
};
console.log(library.books[1]);