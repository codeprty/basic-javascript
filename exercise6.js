/*
Day of the week
Given day = 3 (1–7), print:
1 → "Monday"
2 → "Tuesday"
3 → "Wednesday"
4 → "Thursday"
5 → "Friday"
6 → "Saturday"
7 → "Sunday"
default → "Invalid day"
*/
let dayOfTheWeek = 3;
switch (dayOfTheWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

/*
Fruit color
Given fruit = "banana", print:
"apple" → "Red"
"banana" → "Yellow"
"grape" → "Purple"
default → "Unknown color"
*/
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("Red");
        break;
    case "banana":
        console.log("Yellow");
        break;
    case "grape":
        console.log("Purple");
        break;
    default:
        console.log("Unknown color");
}

/*
Traffic light
Given light = "red", print:
"red" → "Stop"
"yellow" → "Get Ready"
"green" → "Go"
default → "Invalid light"
*/
let light = "red";
switch (light) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid light");
}

/*
Grade description
Given grade = "B", print:
"A" → "Excellent"
"B" → "Good"
"C" → "Average"
"D" → "Below Average"
"F" → "Fail"
default → "Invalid grade"
*/
let grade = "B";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Below Average");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid grade");
}

// Month name
// Given month = 7 (1–12), print the corresponding month name (1 → "January", …, 12 → "December"), default → "Invalid month".
let month = 7;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

/*
Season name
Given monthSeason = 4, print:
12, 1, 2 → "Winter"
3, 4, 5 → "Spring"
6, 7, 8 → "Summer"
9, 10, 11 → "Autumn"
default → "Invalid month"
*/
let monthSeason = 4;
switch (monthSeason) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month")
}

/*
Simple calculator (addition & subtraction)
Given:
let operator = "+";
let a = 10, b = 5;
Use switch to perform addition if + or subtraction if -, default → "Invalid operator"
*/
let operator = "+";
let a = 10, b = 5;
switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    default:
        console.log("Invalid operator");
}

/*
Weekday or weekend
Given day = 6, print:
1–5 → "Weekday"
6–7 → "Weekend"
default → "Invalid day"
*/
let day = 6;
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}

/*
Traffic fine based on speed
Given speed = 80:
60 → "No fine"
80 → "Small fine"
100 → "Large fine"
default → "Invalid speed"
*/
let speed = 80;
switch (speed) {
    case 60:
        console.log("No fine");
        break;
    case 80:
        console.log("Small fine");
        break;
    case 100:
        console.log("Large fine");
        break;
    default:
        console.log("Invalid speed");
}

/*
Letter type
Given letter = "a", print:
"a", "e", "i", "o", "u" → "Vowel"
default → "Consonant"
*/
let letter = "a";
switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}
