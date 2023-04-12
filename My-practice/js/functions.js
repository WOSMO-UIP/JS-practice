// Write a function that takes an array of numbers and returns a new array with the same numbers, but in reverse order.

// =====================================================================




// write a function to find mean of 5 numbers

// function findMean(num1, num2, num3, num4, num5) {
//     return (num1 + num2 + num3 + num4 + num5) / 5;
// }

// console.log(findMean(2, 4, 5, 6, 3));
// =============================================================================

// write a function to print "tryagain" untill i enter right passcode

// function passCode(code) {
//     while (code !== "Was1f") {
//         console.log("try again");
//     }
//     console.log("AccessGranted");
// }
// passCode("jiji")


function passCode(code) {
    while (code !== "Was1f") {

        if (code !== "Was1f") {
            console.log("try again");
        }
    }
    console.log("Access Granted");
}

passCode(prompt("enter  "));
