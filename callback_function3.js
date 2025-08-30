/*
1. Write a function doHomework(subject, callback) that logs:
    • "Starting my <subject> homework."
    • then calls the callback.
2. Create a callback function finishedHomework() that logs:
    • "I’m all done!".
3. Call doHomework("math", finishedHomework).
*/
function doHomeWork(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

function finishedHomework() {
    console.log("I'm all done!");
}

doHomeWork("Mathematic", finishedHomework);
doHomeWork("Science", () => console.log("Done with Science!"));

// Greet with Callback
// Write a function greetUser(name, callback) that prints "Hello, <name>".
// Then call the callback to print a second message, e.g. "Welcome to the website!".
function greetUser(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

greetUser("Anri", () => console.log("Welcome to the website!"));

/*
Math Operation
• Write a function calculate(a, b, callback) that takes two numbers and a callback.
• Inside, call the callback with a and b.
• Test it with:
    • A callback that adds the numbers.
    • A callback that multiplies the numbers.
*/
function calculate(a, b, callback) {
    return callback(a, b);
}

console.log(calculate(2, 4, (x, y) => x + y));
console.log(calculate(2, 4, (x, y) => x * y));

// Show Message After Delay
// Write a function delayedMessage(message, callback) that prints a message.
// Then, use setTimeout with 2 seconds delay to run the callback (e.g. "Message displayed!").
function delayedMessage(message, callback) {
    console.log(message);
    setTimeout(callback, 2000);
}

delayedMessage("This is the main message", () => {
    console.log("Message displayed!");
});

// Array Processing
// Write a function processArray(arr, callback) that loops through the array and applies the callback to each element.
function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        console.log(callback(arr[i]));
    }
}

processArray([1, 2, 3, 4], (num) => num * 2);

// Finish Task
// Write a function doTask(task, callback) that prints "Doing <task>...".
// Then run the callback that prints "Finished <task>!".
function doTask(task, callback) {
    console.log(`Doing ${task}...`);
    callback(task);
}

doTask("homework", (t) => console.log(`Finished ${t}!`));