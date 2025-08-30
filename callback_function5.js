// Say Goodbye with Callback
// Write a function sayGoodbye(name, callback) that:
// • Prints "Goodbye, <name>!"
// • Then calls the callback which prints "See you soon!"
function sayGoodbye(name, callback) {
    console.log(`Goodbye, ${name}!`);
    callback();
}

sayGoodbye("Claudia", () => console.log("See you soon!"));

// Square Numbers
// Write a function squareArray(arr, callback) that:
// • Loops through the array
// • Applies the callback to square each number
// • Returns a new array with the results
// Method 1 - Assigning by index
function squareArray(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = callback(arr[i]);
    }
    return newArr;
}

const result = squareArray([2, 4, 6, 8], (num) => num * num);
console.log(result);

// Method 2 - Using .push()
function squareArray(arr, callback) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

const result2 = squareArray([3, 5, 7, 9], (num) => num * num);
console.log(result2)

// Custom Logger
// Write a function logMessage(message, callback) that:
// • Prints the message
// • Then calls the callback to print "Message logged successfully!"
function logMessage(message, callback) {
    console.log(message);
    callback();
}

logMessage("In process...", () => console.log("Message logged successfully!"));

// Find Odd Numbers
// Write a function findOdds(arr, callback) that:
// • Loops through an array
// • Uses the callback to check if a number is odd
// • Returns a new array with only the odd numbers
// Method 1 - Using .push()
function findOdds(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

const isOdd = findOdds([1, 2, 3, 4, 5, 6], (num) => num % 2 !== 0);
console.log(isOdd);

// Method 2 - Assigning by index
function findOdds(arr, callback) {
    let newArr = [];
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr[idx] = arr[i];
            idx++;
        }
    }
    return newArr;
}

const isOdd2 = findOdds([1, 2, 3, 4, 5, 6], (num) => num % 2 !== 0);
console.log(isOdd2);

// Run Twice
// Write a function runTwice(callback) that:
// Calls the callback two times
function runTwice(callback) {
    callback();
    callback();
}

runTwice(() => console.log("Hello!"));

// Delayed Greeting
// Write a function delayedGreeting(name, delay, callback) that:
// Prints "Preparing greeting..." immediately
// After the delay, calls the callback to print "Hello, <name>!"
function delayedGreeting(name, delay, callback) {
    console.log("Preparing greeting...");
    setTimeout(() => {
        callback(name);
    }, delay);
}

delayedGreeting("Lisa", 1000, (n) => console.log(`Hello, ${n}!`));

// Multiply Elements
// Write a function multiplyArray(arr, factor, callback) that:
// • Multiplies each element in the array by factor using the callback
// • Returns the new array
function multiplyArray(arr, factor, callback) {
    return arr.map(el => callback(el, factor));
}

const result3 = multiplyArray([10, 20, 30, 40, 50], 2, (num, factor) => num * factor);
console.log(result3);

// Task Runner
// Write a function taskRunner(taskName, callback) that:
// • Prints "Running <taskName>..."
// • After 500ms delay, runs the callback to print "Completed <taskName>!"
function taskRunner(taskName, callback) {
    console.log(`Running ${taskName}...`);
    setTimeout(() => {
        callback(taskName);
    }, 500);
}

taskRunner("marathon", (t) => console.log(`Completed ${t}!`));