/*
Create Object
Create an object book with keys:
• title: "1984"
• author: "George Orwell"
• year: 1949
Then print the whole object.
*/
let book = {
    title: "1984",
    author: "George Orwell",
    year: 1949
};
console.log(book);

// Access Property
// From the book object above, print only the author.
console.log(book.author);

// Update Property
// Change the year of book to 1950 and print the updated object.
book.year = 1950;
console.log(book.year);

// Add Property
// Add a new key genre: "Dystopian" to the book object and print it.
book.genre = "Dystopian";
console.log(book);

// Delete Property
// Remove the author key from the book object and print it again.
delete book.author;
console.log(book);