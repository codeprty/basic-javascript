// EPSILON – floating-point comparison
// Check if 0.1 + 0.2 is exactly equal to 0.3 in JavaScript. Print the result.
console.log(0.1 + 0.2 == 0.3);

// MAX_SAFE_INTEGER – maximum safe integer
// Print the largest safe integer that JavaScript can represent.
console.log(Number.MAX_SAFE_INTEGER);

// MIN_SAFE_INTEGER – minimum safe integer
// Print the smallest safe integer that JavaScript can represent.
console.log(Number.MIN_SAFE_INTEGER);

// MAX_VALUE – largest representable number
// Print the largest number JavaScript can represent.
console.log(Number.MAX_VALUE);

// MIN_VALUE – smallest representable number
// Print the smallest positive number JavaScript can represent.
console.log(Number.MIN_VALUE);

// NaN – Not-a-Number
// Try adding "abc" + 5 and print the result.
// Then try "abc" - 5 and print the result.
console.log("abc" + 5);  // "abc5"
console.log("abc" - 5);  // NaN

// Infinity – positive infinity
// Print the result of 1 / 0.
console.log(1 / 0); 

// NEGATIVE_INFINITY – negative infinity
// Print the result of -1 / 0.
console.log(-1 / 0);

// POSITIVE_INFINITY – positive infinity (alternative)
// Print the result of Number.MAX_VALUE * 2.
console.log(Number.MAX_VALUE * 2);

/*
Mixed - EPSILON, MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, Infinity, NaN
Check and print the following:
1. 0.1 + 0.2 == 0.3 (EPSILON/floating-point)
2. 9007199254740992 > Number.MAX_SAFE_INTEGER (MAX_SAFE_INTEGER)
3. -9007199254740992 < Number.MIN_SAFE_INTEGER (MIN_SAFE_INTEGER)
4. 1 / 0 (Infinity)
5. "abc" - 5 (NaN)
*/
console.log(0.1 + 0.2 == 0.3);
console.log(9007199254740992 > Number.MAX_SAFE_INTEGER);
console.log(-9007199254740992 < Number.MIN_SAFE_INTEGER);
console.log(1 / 0);
console.log("abc" - 5);

