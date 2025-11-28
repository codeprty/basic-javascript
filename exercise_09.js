// Check if a number is between 10 and 20 (use &&)
// Given num = 15;
// Log true only if the number is greater than 10 AND less than 20, otherwise false.
let num = 15;
if (num > 10 && num < 20) {
    console.log(num > 10 && num < 20);
}

/*
Check if user can access premium content (use ||)
Given:
let isSubscriber = false;
let hasFreeTrial = true;
Log "Access granted" if the user is a subscriber OR has a free trial.
*/
let isSubscriber = false;
let hasFreeTrial = true;
if (isSubscriber === true || hasFreeTrial === true) {
    console.log("Access granted");
}

// Check if temperature is outside safe range
// Given temp = 5;
// Print "Unsafe" if temp is less than 10 OR greater than 35, otherwise print "Safe".
let temp = 5;
if (temp < 10 || temp > 35) {
    console.log("Unsafe");
} else {
    console.log("Safe");
}

// Validate username length (use &&)
// Given username = "alex";
// Log "Valid" if the username length is 4 AND less than or equal to 10, otherwise "Invalid".
let username = "alex";
if (username.length === 4 && username.length <= 10) {
    console.log("Valid");
} else {
    console.log("Invalid");
}

// Check if a number is NOT zero (use !)
// Given n = 0;
// Log "Non-zero" if the number is NOT zero using the ! operator. Otherwise print "Zero".
let n = 0;
if (!n) {
    console.log("Non-zero");
} else {
    console.log("Zero");
}

/*
Login authentication check (use &&)
Given:
let hasAccount = true;
let enteredCorrectPassword = false;
Log "Login successful" only if both conditions are true.
*/
let hasAccount = true;
let enteredCorrectPassword = false;
if (hasAccount === true && enteredCorrectPassword === true) {
    console.log("Login successful");
}

// OR condition fallback
// Given color = ""; 
// Log "Default color" if color is an empty string OR undefined using ||. Otherwise print the color.
let color = "";
if (color === "" || color === undefined) {
    console.log("Default color");
} else {
    console.log(color);
}

// Check if a number is even AND positive
// Given x = 12;
// Print "Even and positive" if x is even AND greater than 0, else print "Condition not met".
let x = 12;
if (x % 2 === 0 && x > 0) {
    console.log("Even and positive");
} else {
    console.log("Condition not met");
}

// NOT operator with boolean value
// Given isDarkMode = false;
// Use !isDarkMode to print "Light Mode" if dark mode is OFF. Otherwise print "Dark Mode".
let isDarkMode = false;
if (!isDarkMode) {
    console.log("Light Mode");
} else {
    console.log("Dark Mode");
}

/*
Complex condition with && and ||
Given:
let age = 22;
let hasStudentID = false;
Print "Discount applied" if:
• age is ≤ 18 OR hasStudentID is true
• AND age is not below 0
• Otherwise print "No discount".
*/
let age = 22;
let hasStudentID = false;
if ((age <= 18 || hasStudentID === true) && age > 0) {
    console.log("Discount applied");
} else {
    console.log("No discount");
}
