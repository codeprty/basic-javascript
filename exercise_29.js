// Basic precision
// Given num = 123.456;
// Use toPrecision(4) to format num with 4 significant digits.
// Store it in prec1 and print the result.
let num = 123.456;
let prec1 = num.toPrecision(4);
console.log(prec1);

// Small number precision
// Given value = 0.00456789;
// Use toPrecision(3) and store the result in prec2.
// Print the value.
let value = 0.00456789;
let prec2 = value.toPrecision(3);
console.log(prec2);

// Large number precision
// Given bigNum = 987654321;
// Use toPrecision(6) to format it and store in prec3.
// Print the value.
let bigNum = 987654321;
let prec3 = bigNum.toPrecision(6);
console.log(prec3);

// Convert number to string
// Given num = 255;
// Convert it to a string using toString() and store in str1.
// Print the result.
num = 255;
let str1 = num.toString();
console.log(str1);

// Convert decimal number to string
// Given pi = 3.14159;
// Convert it to a string using toString() and store in str2.
// Print the result.
let pi = 3.14159;
let str2 = pi.toString();
console.log(str2);

// Convert number to binary string
// Given n = 10;
// Use toString(2) to get the binary representation.
// Store in str3 and print the result.
let n = 10;
let str3 = n.toString(2);
console.log(str3);

// Basic valueOf()
// Given num = 100;
// Use valueOf() to get the primitive value and store in val1.
// Print the result.
num = 100;
let val1 = num.valueOf();
console.log(val1);

// Decimal valueOf()
// Given decimal = 45.67;
// Use valueOf() and store in val2.
// Print the result.
let decimal = 45.67;
let val2 = decimal.valueOf();
console.log(val2);

// BigInt valueOf()
// Given big = 9007199254740991n;
// Use valueOf() and store in val3.
// Print the result.
let big = 9007199254740991n;
let val3 = big.valueOf();
console.log(val3);

/*
Mixed - toPrecision(), toString(), valueOf()
Given n = 12345.6789;
Do the following:
1. Format n using toPrecision(5) → precMix
2. Convert n to string → strMix
3. Use valueOf() to get the primitive value → valMix
Print all three results.
*/
n = 12345.6789;
let precMix = n.toPrecision(5);
let strMix = n.toString();
let valMix = n.valueOf();
console.log(precMix);
console.log(strMix);
console.log(valMix);
