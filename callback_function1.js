// Write a function doMath(a, b, callback) that takes two numbers and a callback.
// The callback should decide what to do with the numbers.
function doMath(a, b, callback) {
    callback(a, b);
}

doMath(5, 3, (x, y) => console.log(x + y));
doMath(5, 3, (x, y) => console.log(x * y));

// Callbacks with messages
// Write a function greetUser(name, callback) that prints "Hello <name>", and then runs the callback.
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetUser("Alice", () => console.log("Welcome!"));

// Delay with callback
// Write a function doAfterDelay(callback) that waits 1 second (1000ms) and then runs the callback.
function doAfterDelay(callback) {
    setTimeout(callback, 1000);
}

doAfterDelay(() => console.log("Done after 1 second!"));