// Stop at number 5
// Use a for loop to print numbers from 1 to 10, but stop the loop when the number reaches 5 using break.
for (let i = 1; i <= 10; i++) {
    if (i === 5) { break; }
    console.log(i);
}

// Stop when an array item is found
// Given fruits = ["apple", "banana", "orange", "mango"];
// Use a loop to print each fruit, but stop when you reach "orange".
let fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "orange") { break; }
    console.log(fruits[i]);
}

// Find the first even number
// Given numbers = [3, 7, 9, 12, 15];
// Loop through the array and stop as soon as you find the first even number. Print that number.
let i = 0;
let numbers = [3, 7, 9, 12, 15];
while (i < numbers.length) {
    if (numbers[i] % 2 === 0) { break; }
    i++;
}
console.log(numbers[i]);

// Stop password search
// Given passwords = ["1234", "abcd", "qwerty", "pass123"];
// Loop and stop when you find "qwerty". Print "Password found".
let j = 0;
let passwords = ["1234", "abcd", "qwerty", "pass123"];
while (j < passwords.length) {
    if (passwords[j] === "qwerty") { 
        console.log("Password found"); 
        break; 
    }
    j++;
}

// Break at negative number
// Given nums = [5, 8, 12, -3, 14, 20];
// Print numbers until you reach a negative number, then stop.
let x = 0;
let nums = [5, 8, 12, -3, 14, 20];
do {
    if (nums[x] < 0) { break; }
    console.log(nums[x]);
    x++;
}
while (x < nums.length);

// Stop when sum exceeds 20
// Use a loop to add numbers from 1 upward, and stop when the running sum becomes greater than 20.
// Print the final sum.
let y = 1;
let sum = 0;
do {
    sum += y;
    if (sum > 20) { break; }
    y++;
}
while (true);
console.log(sum);

// Break when character found
// Give word = "javascript";
// Loop through each character. Stop the loop when you reach "s" and print "Found s".
let word = "javascript";
for (let i = 0; i <= word.length; i++) {
    if (word[i] === "s") { 
        console.log("Found s");
        break; 
    }
}

// Stop printing after 3 times
// Given text = "Hello";
// Use a loop to print the text, but stop after printing it 3 times using break.
let z = 1;
let text = "Hello";
while (z <= 10) {
    if (z > 3) { break; }
    console.log(text);
    z++;
}

// Break at the first multiple of 7
// Loop numbers from 1 to 50.
// Stop when you find the first multiple of 7. Print that number.
let n = 1;
do {
    if (n % 7 === 0) { break; }
    n++;
}
while (n <= 50);
console.log(n);

// Stop when color is "blue"
// Given colors = ["red", "green", "yellow", "blue", "black"];
// Loop through the array and stop when you reach "blue". Print "Blue found".
let colors = ["red", "green", "yellow", "blue", "black"];
for (let i = 0; i < colors.length; i++) {
    if (colors[i] === "blue") {
        console.log("Blue found");
        break;
    }
}
