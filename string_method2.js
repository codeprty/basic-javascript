/*
charAt / charCodeAt
From "Hello", print:
• the character at index 1
• the Unicode value of the character at index 1.
*/
console.log("Hello".charAt(1));
console.log("Hello".charCodeAt(1));

// concat
// Join "Good" and "Morning" into one string using .concat().
console.log("Good".concat("Morning"));

// repeat
// Print "ha" repeated 3 times.
console.log("ha".repeat(3));

/*padStart / padEnd
With "5", make it:
• "005" using .padStart(3, "0")
• "500" using .padEnd(3, "0").
*/
console.log("5".padStart(3, "0"));
console.log("5".padEnd(3, "0"));

// match
// From "I love JavaScript and Java", find all words that start with "Java".
console.log("I love JavaScript and Java".match(/Java\w*/g));

// matchAll
// From "test1 test2 test3", extract all matches of "test" followed by a digit.
console.log([... "test1 test2 test3".matchAll(/test\d/g)]);

// search
// In "Where is the cat?", find the index where "cat" starts.
console.log("Where is the cat?".search("cat"));

// localeCompare
// Compare "apple" and "banana" with .localeCompare() (to see which comes first alphabetically).
console.log("apple".localeCompare("banana"));

// normalize (Unicode handling)
// Check if "e\u0301" (e + accent) equals "é" after using .normalize().
console.log("e\u0301".normalize() === "é".normalize());

// fromCharCode (bonus, static method)
// Use String.fromCharCode(72, 105) to create the string "Hi".
console.log(String.fromCharCode(72, 105));