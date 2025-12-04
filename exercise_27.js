// toExponential with 2 decimals
// Convert the number 12345 into exponential notation with 2 decimal places.
// Store it in a variable named exp1 and print the value.
let num = 12345;
let exp1 = num.toExponential(2);
console.log(exp1);

// toExponential with 3 decimals
// Convert 0.00567 into exponential format with 3 decimal places.
// Store it in exp2 and print the value.
num = 0.00567;
let exp2 = num.toExponential(3);
console.log(exp2);

// toExponential with 5 decimals
// Given num = 987654321;
// Convert num to exponential form with 5 decimal places.
// Store it in exp3 and print the value.
num = 987654321;
let exp3 = num.toExponential(5);
console.log(exp3);

// Round to 2 decimal places
// Round the number 12.34567 to 2 decimals using toFixed().
// Store it in fixed1 and print the value.
num = 12.34567;
let fixed1 = num.toFixed(2);
console.log(fixed1);

// Convert to 4 decimal places
// Convert 9.1 to a string with 4 decimals.
// Store it in fixed2 and print the value.
num = 9.1;
let fixed2 = num.toFixed(4);
console.log(fixed2);

// Round to whole number (0 decimals)
// Given price = 199.999;
// Use toFixed(0) to round it to a whole number.
// Store it in fixed3 and print the value.
let price = 199.999;
let fixed3 = price.toFixed(0);
console.log(fixed3);

// Local format (default locale)
// Convert 1234567 to a localized string.
// Store it in local1 and print the value.
num = 1234567;
let local1 = num.toLocaleString();
console.log(local1);

// US Currency format
// Format the number 98765.4321 to USD currency using:
// style: "currency" and currency: "USD"
// Store it in local2 and print the value.
num = 98765.4321;
let local2 = num.toLocaleString("en-US", {style:"currency", currency:"USD"});
console.log(local2);

// German locale number formatting
// Convert 1000000 using the German locale "de-DE".
// Store it in local3 and print the value.
num = 1000000;
let local3 = num.toLocaleString("de-DE");
console.log(local3);

/*
Mixed - toExponential(), toFixed(), toLocaleString()
Given n = 54321.98765;
Do all of the following:
1. Convert n to exponential form with 3 decimals → expMix
2. Convert n to fixed form with 1 decimal → fixedMix
3. Convert n to localized string using Japanese locale "ja-JP" → localMix
*/
let n = 54321.98765;
let expMix = n.toExponential(3);
let fixedMix = n.toFixed(1);
let localMix = n.toLocaleString("ja-JP");
console.log(expMix);
console.log(fixedMix);
console.log(localMix);
