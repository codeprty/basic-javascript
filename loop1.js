// Print Numbers 1 to 10
// Use a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
};

// Print Even Numbers (1–20)
// Use a loop to print only even numbers between 1 and 20.
// Method 1 - For Loop
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    };
};

// Method 2 - While Loop
let j = 1;

while (j <= 20) {
    if (j % 2 === 0) {
        console.log(j);
    };
    j++;
};

// Sum of Numbers (1–100)
// Use a loop to calculate the sum of numbers from 1 to 100.
// Method 1 - For Loop
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
};

console.log(sum);

// Method 2 - While Loop
let a = 1;
let tot = 0;

while (a <= 100) {
    tot += a;
    a++;
};

console.log(sum);

// Multiplication Table
// Store a number in a variable (like 5) and print its multiplication table up to 10.
// Method 1 - For Loop
let number = 5;
let multiply;

for (let i = 1; i <= 10; i++) {
    multiply = number * i;
    console.log(`${number} * ${i} = ${multiply}`);
};

// Method 2 - While Loop
let i = 1;

while (i <= 10) {
    multiply = number * i;
    console.log(`${number} * ${i} = ${multiply}`);
    i++;
};