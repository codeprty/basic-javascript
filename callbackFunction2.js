// Write a greetUser function that takes a name and a callback.
// First call it with a normal function callback.
// Then call it again with an arrow function callback.
/* Call with normal function */
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}

function afterGreeting() {
    console.log("Welcome!");
}

greetUser("Anri", afterGreeting);

/* Call with arrow function */
greetUser("Hitomi", () => console.log("Welcome!"));

// Make a timeout that prints "Done!" after 1 second.
// Use a normal function.
// Then rewrite it using an arrow function.
/* Normal function version */
setTimeout(function() {
  console.log("Done!");
}, 1000);

/* Arrow function version */
setTimeout( () => console.log("Done after 1 second!"), 1000);

// Given an array ["a", "b", "c"], print each element.
// Use a normal function with .forEach().
// Rewrite it with an arrow function.
/* Normal function version */
let letters = ["a", "b", "c"];

letters.forEach(function(letter) {
    console.log(letter);
});

/* Arrow function version */
letters.forEach(letter => console.log(letter));