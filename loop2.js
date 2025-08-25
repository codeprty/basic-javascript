// Print Odd Numbers (1-20)
// Method 1 - For Loop
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    };
};

// Method 2 - While Loop
let j = 1;

while (j <= 20) {
    if (j % 2 === 1) {
        console.log(j);
    };
    j++;
};

// Countdown (10–1)
// Use a loop to print numbers from 10 down to 1.
// Method 1 - For Loop
for (let k = 10; k >= 1; k--) {
    console.log(k);
};

// Method 2 - While Loop
let l = 10;

while (l >= 1) {
    console.log(l);
    l--;
};

// Sum of Even Numbers (1–50)
// Calculate the sum of all even numbers between 1 and 50.
// Method 1 - For Loop
let sum1 = 0;

for (let m = 1; m <= 50; m++) {
    if (m % 2 === 0) {
        sum1 += m;
    };
};

console.log(sum1);

// Method 2 - While Loop
let n = 1;
let sum2 = 0;

while (n <= 50) {
    if (n % 2 === 0) {
        sum2 += n;
    };
    n++;
};

console.log(sum2);

// Squares of Numbers
// Print the squares of numbers from 1 to 10.
// Method 1 - For Loop
for (let o = 1; o <= 10; o++) {
    console.log(`${o} squared = ${o * o}`);
};

// Method 2 - While Loop
let p = 1;

while (p <= 10) {
    console.log(`${p} squared = ${p * p}`);
    p++;
};

// Factorial (basic)
// Store a number like 5 and use a loop to calculate its factorial (5! = 1×2×3×4×5).
// Method 1 - For Loop
let a = 5;
let result = 1;

for (let q = 1; q <= a; q++) {
    result *= q;
};

console.log(result);

// Method 2 - While Loop
let b = 5;
let factorial = 1;
let r = 1;

while (r <= b) {
    factorial *= r;
    r++;
};

console.log(factorial);