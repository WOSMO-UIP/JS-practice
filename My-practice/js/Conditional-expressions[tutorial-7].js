// Conditional expressions
// Easy - exercise
// ====================================================================================================================
// Q1) Write a JavaScript expression that calculates the area of a circle with radius r.

// function findRadius() {
//     const PI = 3.14;
//     let r = Number(prompt('enter radius'));
//     return 2 * 3.14 * r
// }

// console.log(findRadius());

// ====================================================================================================================

// Q2) Write a JavaScript expression that converts a temperature from Celsius to Fahrenheit.

// function C2F(Celsius) {
//     let Fahrenheit = (Celsius * 1.8) + 32;
//     return Fahrenheit;
// }
// console.log(C2F(Number(prompt('enter number: '))));
// ====================================================================================================================

// Q3) Write a function that takes in a string as an argument and returns the string in all uppercase letters if its length is greater than 10 characters, and in all lowercase letters otherwise.


function changeToUpperOrLowerCase(string1, string2) {
    if (string1.length < 10) {
        return (string1).toUpperCase();
    }
    else {
        return (string1).toLowerCase();
    }
}



console.log(changeToUpperOrLowerCase("WasifMalik", "wasg"));

// Q4) Write a JavaScript program to check if a given number is positive, negative or zero using conditional expressions.

function checkNum(number) {
    if (number !== 0) {
        return (number < 0) ? "Number is -ve " : "Number is +ve";
    } else if (number !== 0) {
        return ("Number is equal to zero");
    }
}
// function checkNum(number) {
//     if (number < 0)
//         return "Number is -ve";
//     if (number > 0)
//         return "Number is +ve";
//     return "Number is equal to zero";
// }



// function checkNum(number) {
//     let result = (number < 0) ? "-ve" : (number > 0) ? "+ve" : "zero";
//     return `The ${number} is  ${result}`;
// }

// ====================================================================================================================


// Q5) Write a function that takes in two numbers as arguments and returns the larger of the two numbers using a conditional expression.

// function findLargerOne(num1, num2) {
//     return (num1 < num2) ? num2 : (num1 > num2) ? num1 : (`${num1} = ${num2}`);
// }

// ====================================================================================================================

// Q6) Write a function that takes in three numbers as arguments and returns the sum of the two largest numbers using a conditional expression.

// function findSumOf2largeNumbers(num1, num2, num3) {
//     if (num1 < num2 && num3) {
//         console.log(num2 + num3);
//     }
//     else if (num2 < num1 && num3) {
//         console.log(num1 + num3);
//     }
//     else if (num3 < num1 && num2) {
//         console.log(num2 + num1);
//     }
// }

// function findSumOf2largeNumbers(num1, num2, num3) {
//     console.log((num1 < num2 && num3) ? (num2 + num3) : (num2 < num1 && num3) ? (num1 + num3) : (num2 + num1));
// }
// findSumOf2largeNumbers(12, 2, 3);




