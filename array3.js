// Even Numbers Only
// Store [3, 6, 9, 12, 15, 18] in an array. Print only the even numbers.
let even = [3, 6, 9, 12, 15, 18];

for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
        console.log(even[i]);
    };
};

// Array Join
// Store ["red", "green", "blue"] in an array and print "red-green-blue" (hint: .join("-")).
let color = ["red", "green", "blue"];
console.log(color.join("-"));

// Second Largest Number
// Store [4, 12, 7, 19, 8] in an array. Find the second largest number.
let arr = [4, 12, 7, 19, 8];
let largest = Math.max(...arr);
let second = -Infinity;

for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== largest) {
        if (arr[j] > second) {
            second = arr[j];
        };
    };
};

console.log(second);