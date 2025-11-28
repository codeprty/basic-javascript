// Print numbers 1 to 10
// Use a do while loop to print numbers from 1 to 10.
let i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 10);

// Print even numbers from 2 to 20
// Use a do while loop to print only even numbers from 2 up to 20.
let j = 2;
do  {
    console.log(j);
    j += 2;
}
while (j <= 20);

// Countdown from 10 to 1
// Use a do while loop to print numbers in reverse.
let k = 10;
do {
    console.log(k);
    k--;
}
while (k >= 1);

// Sum numbers 1 to 5
// Use a do while loop to calculate the total of numbers 1 → 5.
// Print the final sum.
let l = 1;
let sum = 0;
do {
    sum += l;
    l++
}
while (l <= 5);
console.log(sum);

// Print each character of a string
// Given word = "javascript";
// Use a do while loop to print each letter.
let m = 0;
let word = "javascript";
do {
    console.log(word[m]);
    m++;
}
while (m < word.length);

// Loop through an array
// Given colors = ["red", "green", "blue"];
// Use a do while loop to print each color.
let n = 0;
let colors = ["red", "green", "blue"];
do {
    console.log(colors[n]);
    n++;
}
while (n < colors.length);

// Print multiples of 5 up to 50
// Use a do while loop to print: 5, 10, 15, ... 50
let o = 5;
do {
    console.log(o);
    o += 5;
}
while(o <= 50);

// Count how many numbers from 1–30 are divisible by 4
// Use a do while loop to count them. Print the result.
let p = 1;
let count = 0;
do {
    if (p % 4 === 0) {
        count++;
    }
    p++;
}
while (p <= 30);
console.log(count);

// Repeat a word
// Given text = "Hello";
// Use a do while loop to print it 5 times.
let q = 1;
let text = "Hello";
do {
    console.log(text);
    q++;
}
while (q <= 5);

// Number guessing countdown
// Given number = 5;
// Use a do while loop to count down from 10 to the number (10 → 5).
// Print each number.
let r = 10;
let number = 5;
do {
    console.log(r);
    r--;
}
while (r >= number);
