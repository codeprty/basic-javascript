// Print numbers 1 to 10
// Given i = 1;
// Use a while loop to print numbers from 1 to 10.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Print even numbers from 2 to 20
// Use a while loop to print only even numbers from 2 up to 20.
let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}

// Countdown from 10 to 1
// Use a while loop to print numbers in reverse.
let k = 10;
while (k >= 1) {
    console.log(k);
    k--;
}

// Sum numbers 1 to 5
// Use a while loop to calculate the total of numbers 1 → 5.
// Print the final sum.
let l = 1;
let sum = 0;
while (l <= 5) {
    sum += l;
    l++;
}
console.log(sum);

// Print each character of a string
// Given word = "javascript";
// Use a while loop to print each letter.
let m = 0;
let word = "javascript";
while (m < word.length) {
    console.log(word[m]);
    m++;
}

// Loop through an array
// Given colors = ["red", "green", "blue"];
// Use a while loop to print each color.
let n = 0;
let colors = ["red", "green", "blue"];
while (n < colors.length) {
    console.log(colors[n]);
    n++;
}

// Print multiples of 5 up to 50
// Use a while loop to print: 5, 10, 15, ... 50
let o = 5;
while (o <= 50) {
    console.log(o);
    o += 5;
}

// Count how many numbers from 1–30 are divisible by 4
// Use a while loop to count them. Print the result.
let p = 1;
let count = 0;
while (p <= 30) {
    if (p % 4 ===0) {
        count++;
    }
    p++;
}
console.log(count);

// Repeat a word
// Given text = "Hello";
// Use a while loop to print it 5 times.
let q = 0;
let text = "Hello";
while (q < 5) {
    console.log(text);
    q++;
}

// Number guessing countdown
// Given number = 5;
// Use a while loop to count down from 10 to the number (10 → 5).
// Print each number.
let r = 10;
let number = 5;
while (r >= number) {
    console.log(r);
    r--;
}