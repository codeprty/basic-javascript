// Sum of All Numbers in Array
// Write a function sumArray(arr) that returns the sum of all numbers in an array.
function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Find the Maximum Number
// Write a function findMax(arr) that returns the largest number in an array.
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([10, 25, 3, 99, 42]));

// Remove Duplicates
// Write a function removeDuplicates(arr) that removes duplicate values from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Flatten Nested Array (1 level)
// Write a function flattenArray(arr) that flattens an array that contains nested arrays by one level.
function flattenArray(arr) {
    return arr.flat();
}

console.log(flattenArray([1, [2, 3], [4, 5], 6]));

// Count Even and Odd Numbers
// Write a function countEvenOdd(arr) that returns an object with counts of even and odd numbers.
function countEvenOdd(arr) {
    let result = { even: 0, odd: 0 };
    for (let num of arr) {
        if (num % 2 === 0) {
            result.even++;
        } else {
            result.odd++;
        }
    }
    return result;
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));