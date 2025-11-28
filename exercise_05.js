/*
Grade checker
Given score = 85, print:
"A" if score ≥ 90
"B" if score ≥ 80
"C" if score ≥ 70
"D" if score ≥ 60
"F" otherwise
*/
let score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

/*
Temperature description
Given temp = 18, print:
"Hot" if temp ≥ 30
"Warm" if temp ≥ 20
"Cool" otherwise
*/
let temp = 18;
if (temp >= 30) {
    console.log("Hot");
} else if (temp >= 20) {
    console.log("Warm");
} else {
    console.log("Cool");
}

/*
Age group
Given age = 12, print:
"Child" if age < 13
"Teen" if age < 20
"Adult" otherwise
*/
let age = 12;
if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teen");
} else {
    console.log("Adult");
}

/*
Number sign
Given num = 0:
"Positive" if num > 0
"Negative" if num < 0
"Zero" if num === 0
*/
let num = 0;
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

/*
Password strength
Given password = "abcd123":
"Strong" if length ≥ 8
"Medium" if length ≥ 5
•"Weak" otherwise
*/
let password = "abcd123";
if (password.length >= 8) {
    console.log("Strong");
} else if (password.length >= 5) {
    console.log("Medium");
} else {
    console.log("Weak");
}

/*
Exam result
Given marks = 55:
"Pass with distinction" if marks ≥ 75
"Pass" if marks ≥ 50
"Fail" otherwise
*/
let marks = 55;
if (marks >= 75) {
    console.log("Pass with distinction");
} else if (marks >= 50) {
    console.log("Pass");
} else {
    console.log('Fail');
}

/*
BMI category
Given bmi = 27:
"Underweight" if bmi < 18.5
"Normal" if bmi < 25
"Overweight" otherwise
*/
let bmi = 27;
if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal");
} else {
    console.log("Overweight");
}

/*
Speed check
Given speed = 95:
"Safe" if speed ≤ 60
"Warning" if speed ≤ 90
"Danger" otherwise
*/
let speed = 95;
if (speed <= 60) {
    console.log("Safe");
} else if (speed <= 90) {
    console.log("Warning");
} else {
    console.log("Danger");
}

/*
Discount based on price
Given price = 250:
"30% discount" if price ≥ 300
"20% discount" if price ≥ 200
"10% discount" otherwise
*/
let price = 250;
if (price >= 300) {
    console.log("30% discount");
} else if (price >= 200) {
    console.log("20% discount");
} else {
    console.log("10% discount");
}

/*
Time of day
Given hour = 14 (24-hour format):
"Morning" if hour < 12
"Afternoon" if hour < 18
"Night" otherwise
*/
let hour = 14;
if (hour < 12) {
    console.log("Morning");
} else if (hour < 18) {
    console.log("Afternoon");
} else {
    console.log("Night");
}
