// Print numbers 1 to 10
// Use a for loop to print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Print even numbers from 2 to 20
// Use a for loop to log only even numbers between 2 and 20.
for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}

// Print numbers in reverse (10 → 1)
// Use a for loop to print numbers from 10 down to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Sum of first 5 numbers
// Use a for loop to calculate the sum of numbers 1 to 5.
// Print the final result.
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum);

// Print each character in a string
// Given word = "hello";
// Use a for loop to print each character individually.
let word ="hello";
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// Loop through an array
// Given fruits = ["apple", "banana", "orange"];
// Use a for loop to print each fruit.
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Count backwards with steps
// Print numbers from 20 down to 0, decreasing by 5 each time.
for (let i = 20; i >= 0; i-=5) {
    console.log(i);
}

// Find how many numbers are divisible by 3
// From 1 to 30, count how many numbers are divisible by 3.
// Print the count.
let count = 0;
for (let i = 1; i <=30; i++) {
    if (i % 3 === 0) {
        count++;
    }
}
console.log(count);

// Multiply each array element by 2
// Given numbers = [2, 4, 6, 8];
// Use a for loop to print each number multiplied by 2.
let numbers = [2, 4, 6, 8];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

// Create repeated text
// Given text = "Hi";
// Use a for loop to print "Hi" 5 times.
let text = "Hi";
for (let i = 1; i <= 5; i++) {
    console.log(text);
}
