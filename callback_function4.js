// Simple Callback
// Write a function sayHello(name, callback) that:
// Prints "Hello, <name>!"
// Then calls the callback, which prints "How are you today?".
function sayHello(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function afterHello() {
    console.log("How are you today?");
}

sayHello("Anri", afterHello);
sayHello("Hitomi", () => console.log("How are you today?"));

// Array Mapping with Callback
// Write a function transformArray(arr, callback) that:
// • Loops through arr
// • Applies the callback to each element
// • Returns a new array of the results.
// Test with a callback that doubles each number.
function transformArray(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

const result = transformArray([10, 20, 30, 40], (num) => num * 2);
console.log(result);

// Filter with Callback
// Write a function filterArray(arr, callback) that:
// • Loops through arr
// • Returns a new array containing only elements where callback(element) is true.
// Test it by filtering only even numbers.
function filterArray(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const isEven = filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0);
console.log(isEven);

// Delayed Message
// Write a function delayedAlert(message, delay, callback) that:
// • Prints the message immediately
// • Runs the callback after delay milliseconds using setTimeout.
function delayedAlert(message, delay, callback) {
    console.log(message);
    setTimeout(callback, delay);
}

delayedAlert("Message displayed!", 1000, () => console.log("Delayed message!"));

// Calculator
// Write a function calculator(a, b, operation) that:
// • Takes two numbers a and b
// • Calls the operation callback on a and b
// • Returns the result.
// Test with addition, multiplication, and subtraction.
function calculator(a, b, operation) {
    return operation(a, b);
}

console.log(calculator(7, 3, (x, y) => x + y));
console.log(calculator(7, 3, (x, y) => x * y));
console.log(calculator(7, 3, (x, y) => x - y));

// Greeting Multiple Users
// Write a function greetUsers(users, callback) where:
// • users is an array of names
// • The callback prints "Hello, <name>!" for each user
function greetUsers(users, callback) {
    for (let i = 0; i < users.length; i++) {
        callback(users[i]);
    }
}

greetUsers(["Ellie", "Joel", "Abby"], (name) => console.log(`Hello, ${name}!`));

// Finish Task
// Write a function finishTask(taskName, callback):
// Prints "Starting <taskName>..."
// After 1 second delay, runs the callback which prints "Finished <taskName>!"
function finishTask(taskName, callback) {
    console.log(`Starting ${taskName}...`);
    setTimeout(() => {
        callback(taskName);
    }, 1000);
}

finishTask("homework", (task) => console.log(`Finished ${task}!`));

// Combine Arrays
// Write a function combineArrays(arr1, arr2, callback) that:
// • Merges arr1 and arr2
// • Passes the combined array to the callback
// • The callback prints "Combined array: [ ... ]"
function combineArrays(arr1, arr2, callback) {
    const combined = arr1.concat(arr2);
    callback(combined);
}

combineArrays([1, 2, 3], [4, 5, 6], (newArr) => console.log(`Combined array: [${newArr}]`));