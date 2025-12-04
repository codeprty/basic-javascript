# JavaScript Fundamental Exercises

This project is a collection of **beginner-friendly JavaScript exercises**.  
Each file contains **10 exercises** focused on a specific fundamental topic.  
These exercises are designed and tested using **Visual Studio Code** and can be run in the terminal with **Node.js**.

The goal of this project is to help beginners **practice essential JavaScript concepts** and **build a strong foundation** before moving on to more advanced topics.

**Note:** This project is ongoing. More exercises are added regularly to cover additional JavaScript fundamentals.


## Project Structure

The project contains 31 JavaScript files, each covering a different topic:

| File Name        | Topic             | Description                                                                                                          |
|------------------|-------------------|----------------------------------------------------------------------------------------------------------------------|
| exercise_01.js   | Variables         | Declaring variables with let/const, swapping, basic arithmetic.                                                      |
| exercise_02.js   | Operators         | Arithmetic, assignment, comparison, and range checks.                                                                |
| exercise_03.js   | If Statement      | Single-branch conditions for numbers, age, and strings.                                                              |
| exercise_04.js   | If-Else           | Two-branch conditions like even/odd, login, temperature.                                                             |
| exercise_05.js   | If-Else-If        | Multi-condition checks using else-if: grades, age groups, and more.                                                  |
| exercise_06.js   | Switch            | Handling multiple options: days, months, traffic lights, letters.                                                    |
| exercise_07.js   | Ternary Operator  | Concise conditions using `? :` for checks and decisions.                                                             |
| exercise_08.js   | Booleans          | Boolean values, logical operations, and conversions.                                                                 |
| exercise_09.js   | Logical Operators | Combining conditions with `&&`, `\|\|`, and `!` for validation and access.                                           |
| exercise_10.js   | For Loop          | Counting, reversing, summing, iterating arrays/strings.                                                              |
| exercise_11.js   | While Loop        | Similar to for loops but using while loops.                                                                          |
| exercise_12.js   | Do-While Loop     | Similar to while loops but executes at least once.                                                                   |
| exercise_13.js   | Break             | Stop loops early using the `break` statement.                                                                        |
| exercise_14.js   | Continue          | Skip iterations in loops using the `continue` statement.                                                             |
| exercise_15.js   | Strings           | Working with quotes, escape characters, and template literals.                                                       |
| exercise_16.js   | String Access     | Access characters and check substrings using `.at()`, `.charAt()`, and `.includes()`.                                |
| exercise_17.js   | String Search     | Find positions of characters and words using `.indexOf()`, `.lastIndexOf()`, and `.search()`.                        |
| exercise_18.js   | String Extraction | Extract and split parts of strings using `slice()`, `substring()`, and `split()`.                                    |
| exercise_19.js   | String Modify     | Modify strings using `replace()`, `replaceAll()`, `repeat()`, and `concat()` methods.                                |
| exercise_20.js   | String Checking   | Check string beginnings and endings using `startsWith()` and `endsWith()`.                                           |
| exercise_21.js   | String Trim       | Remove leading and trailing spaces using `trim()`, `trimStart()`, and `trimEnd()`.                                   |
| exercise_22.js   | String Case       | Convert strings to lowercase and uppercase using `toLowerCase()` and `toUpperCase()`.                                |
| exercise_23.js   | String Padding    | Add padding to strings using `padStart()` and `padEnd()` methods.                                                    |
| exercise_24.js   | Numbers           | Work with numbers, conversions, BigInt, floating-point behavior, and numeric operators.                              |
| exercise_25.js   | Number Check      | Check numeric values using `isFinite()`, `isInteger()`, and `isNaN()`.                                               |
| exercise_26.js   | Number Parsing    | Extract and validate numbers using `isSafeInteger()`, `parseInt()`, and `parseFloat()`.                              |
| exercise_27.js   | Number Formatting | Convert, round, and localize numbers with `toExponential()`, `toFixed()`, and `toLocaleString()`.                    |
| exercise_28.js   | Number Conversion | Format numbers, convert to strings, and get values using `toPrecision()`, `toString()`, and `valueOf()`.             |
| exercise_29.js   | Number Properties | Explore numeric constants and special values: `EPSILON`, safe integers, `MAX_VALUE`, `MIN_VALUE`, `NaN`, `Infinity`. |
| exercise_30.js   | Functions         | Function basics including declaration, parameters, arguments, return, scope, and function calling.                   |
| exercise_31.js   | Parameters        | Using default parameters, rest parameters, and the arguments object.                                                 |


## Prerequisites

- **Node.js** installed on your machine (v14 or above recommended)  
- **Visual Studio Code** (optional, but recommended)


## How to Run the Exercises

The exercises are written in JavaScript and can be run using **Node.js** in Visual Studio Code (VS Code).

1. **Check if Node.js is installed**  
   Open the **PowerShell terminal** in VS Code and run:
   ```powershell
   node -v
   ```
   - If you see a version number (e.g., v22.18.0), Node.js is installed.
   - If nothing shows or you get an error, install Node.js first.
2. **Install Node.js (if not already installed)**
   - Download and install Node.js from: [https://nodejs.org/](https://nodejs.org/)
   - After installation, run **node -v** again to confirm it works.
3. **Open the project in VS Code**
   - Navigate to your project folder and open it in VS Code.
   - Open a terminal inside VS Code (**Terminal > New Terminal**).
4. **Run an exercise**
   - In the terminal, run a specific JavaScript file with Node.js:
     ```powershell
     node exercise_01.js
     ```
   - Replace **exercise_01.js** with the file you want to run (e.g., **exercise_02.js**).
5. View output
   - The results of the exercise will be printed in the terminal.
   - Modify the code or try different exercises to practice and see results in real-time.
