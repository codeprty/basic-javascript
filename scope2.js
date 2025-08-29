// Global Variable Access
// Create a global variable language = "JavaScript".
// Write a function printLanguage() that logs the value of language.
// Call the function.
// Then change language to "Python" outside the function and call it again.
let language = "JavaScript";

function printLanguage() {
    console.log(language);
}

printLanguage();
language = "Python";
printLanguage();

// Function Scope Isolation
// Write two functions funcA() and funcB().
// Inside funcA(), declare let x = 10 and log it.
// Inside funcB(), try logging x.
// What happens?
function funcA() {
    let x = 10;
    console.log(x);
}

function funcB() {
    console.log(x);
}

funcA();
// funcB();

// Block Scope with if
// Write an if (true) block.
// Inside it, declare let y = 20 and log it.
// Try logging y outside the block.
// Repeat the same but with var y = 20.
// Case 1: with let
if (true) {
    let y = 20;
    console.log(y);
}
console.log(y);

// Case 2: with var
if (true) {
    var y = 20;
    console.log(y);
}
console.log(y);

// Parameter vs Local Variable
// Write a function showName(name) that logs the parameter name.
// Inside the function, also declare let name = "Overwritten" and log it.
// Call showName("Alice").
// Observe how the local variable shadows the parameter.
function showName(name) {
    name = "Overwritten";
    console.log(name);
}

showName("Alice");

// Loop Scope Trap
// Write a for loop with var i = 0; i < 3; i++ and inside, use setTimeout(() => console.log(i), 1000).
// Observe the output.
// Repeat the loop with let i instead of var.
// Compare the difference in results.
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}