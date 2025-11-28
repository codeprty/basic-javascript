// Skip Number 5
// Use a loop to print numbers from 1 to 10, but skip the number 5 using continue.
for (let i = 1; i <= 10; i++) {
    if (i === 5) { continue; }
    console.log(i);
}

// Skip Even Numbers
// Given the loop from 1 to 20, print only odd numbers using continue.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { continue; }
    console.log(i);
}

// Skip “banana”
// Given fruits = ["apple", "banana", "orange", "mango"];
// Loop through the array and skip "banana".
let fruits = ["apple", "banana", "orange", "mango"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "banana") { continue; }
    console.log(fruits[i]);
}

// Skip Negative Numbers
// Given nums = [3, -1, 4, -5, 6, 8];
// Use a loop to print only positive numbers using continue.
let i = 0;
let nums = [3, -1, 4, -5, 6, 8];
while (i < nums.length) {
    if (nums[i] < 0) {
        i++;
        continue;
    }
    console.log(nums[i]);
    i++;
}

// Skip Characters
// Given word = "javascript";
// Loop through each character and skip the letter "a".
let j = 0;
let word = "javascript";
while (j < word.length) {
    if (word[j] === "a") {
        j++;
        continue;
    }
    console.log(word[j]);
    j++;
}

// Skip Multiples of 4
// Loop numbers 1–30. Skip numbers that are multiples of 4.
let k = 1;
while (k <= 30) {
    if (k % 4 === 0) {
        k++;
        continue;
    }
    console.log(k);
    k++;
}

// Skip Long Words
// Given words = ["hi", "javascript", "car", "programming", "ok"];
// Print only words with length ≤ 5, skip the rest.
let x = 0;
let words = ["hi", "javascript", "car", "programming", "ok"];
do {
    if (words[x].length > 5) {
        x++;
        continue;
    }
    console.log(words[x]);
    x++;
}
while (x < words.length);

// Skip Until Number is ≥ 10
// values = [3, 5, 2, 12, 8, 15, 20];
// Print only numbers 10 or above, skip smaller ones.
let y = 0;
let values = [3, 5, 2, 12, 8, 15, 20];
do {
    if (values[y] < 10) {
        y++;
        continue;
    }
    console.log(values[y]);
    y++;
}
while (y < values.length);

// Skip First 3 Iterations
// Loop from 1 to 10. Skip the first 3 numbers, then print the rest.
let z = 1;
do {
    if (z <= 3) {
        z++;
        continue;
    }
    console.log(z);
    z++;
}
while (z <= 10);

// Skip Words That Start With "p"
// Given items = ["cat", "apple", "pen", "sun", "pig"];
// Loop through the array and skip any word that starts with "p".
let items = ["cat", "apple", "pen", "sun", "pig"];
for (let i = 0; i < items.length; i++) {
    if (items[i][0] === "p") { continue; }
    console.log(items[i]);
}
