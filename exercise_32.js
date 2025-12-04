// Default parameter (basic)
// Create a function greet with a default parameter name = "Guest".
// Print "Hello, " + name.
function greet(name = "Guest") {
    return "Hello, " + name;
}
console.log(greet());

// Default number parameter
// Create a function addFive with a default parameter num = 5.
// Print num + 5.
function addFive(num = 5) {
    return num + 5;
}
console.log(addFive());

// Missing argument uses default
// Create a function showCity with a default parameter city = "Unknown".
// Call the function without passing any argument and print the city.
function showCity(city = "Unknown") {
    console.log(city);
}
showCity();

// Rest parameter info
// Create a function showCount that uses a rest parameter ...values.
// Print how many values were passed.
function showCount(...values) {
    return values.length;
}
console.log(showCount(1, 2, 3, 4));

// Rest parameter array
// Create a function listItems that uses ...items.
// Print the array returned by items.
function listItems(...items) {
    return items;
}
console.log(listItems("book", "pencil", "eraser"));

// Rest parameter with strings
// Create a function combineWords that uses ...words.
// Print all words joined into one string.
function combineWords(...words) {
    return words.join("");
}
console.log(combineWords("Java", "Script"));

// Arguments count
// Create a function countArgs.
// Inside the function, print arguments.length.
function countArgs() {
    console.log(arguments.length);
}
countArgs(1, 2, 3);

// First argument
// Create a function firstValue.
// Inside the function, print arguments[0].
function firstValue() {
    console.log(arguments[0]);
}
firstValue("apple", "banana");

// Loop through arguments
// Create a function printAll.
// Loop through all values in arguments and prints each one.
function printAll() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printAll("A", "B", "C");

/*
Mixed parameter check
Create a function test with a default parameter a = 10 and a rest parameter ...others.
Print:
• the value of a
• the number of total arguments using arguments.length
*/
function test(a = 10, ...others) {
    console.log(a, arguments.length);
}
test(1, 2, 3);
