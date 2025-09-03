// Object to Array
// Write a function objectToArray(obj) that converts an object into an array of [key, value] pairs.
function objectToArray(obj) {
    return Object.entries(obj);
}

console.log(objectToArray({ a: 1, b: 2, c: 3 }));

// Count Object Properties
// Write a function countProperties(obj) that returns the number of properties (keys) in an object.
function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties({ name: "Alice", age: 25, city: "KL" }));

// Merge Two Objects
// Write a function mergeObjects(obj1, obj2) that merges two objects into one. If the same key exists, the value from obj2 should overwrite obj1.
function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));

// Check if Property Exists
// Write a function hasProperty(obj, prop) that checks if a given property exists in an object.
function hasProperty(obj, prop) {
    return prop in obj;
}

console.log(hasProperty({ name: "Alice", age: 25 }, "age"));
console.log(hasProperty({ name: "Alice", age: 25 }, "gender"));

// Group By Property (Intermediate)
// Write a function groupBy(arr, prop) that groups an array of objects by a given property.
function groupBy(arr, prop) {
    const grouped = {};
    for (const item of arr) {
        const key = item[prop];
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(item);
    }
    return grouped;
}

let users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" }
];

console.log(groupBy(users, "role"));