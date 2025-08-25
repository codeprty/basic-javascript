/*
Create Object
Create an object person with keys:
• name: "Alice"
• age: 25
• city: "New York"
Then print the whole object.
*/
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(person);

// Access Property
// From the person object above, print only the name.
console.log(person.name);

// Update Property
// Change the age of person to 30 and print the updated object.
person.age = 30;
console.log(person.age);

// Add Property
// Add a new key hobby: "painting" to the person object. Print the object again.
person.hobby = "painting";
console.log(person);

// Delete Property
// Remove the city key from person and print the object again.
delete person.city;
console.log(person);