// ---------------------------------------------------
// inchs to feet
// ---------------------------------------------------
// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }

// const dadInches = 144;
// const dadfeet = inchToFeet(dadInches);
// console.log(dadfeet);
// ---------------------------------------------------
// Miles to km
// ---------------------------------------------------
// function milesToKm(miles) {
//     const km = miles * 1.60934;
//     return km;
// }

// const workMiles = 2;
// const theDistance = milesToKm(workMiles);
// console.log(theDistance)
// ---------------------------------------------------
// Odd or Even number
// ---------------------------------------------------
// function oddOrEven(numbers) {
//     const value = numbers % 2;
//     if (value == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const numbers = 117;
// const number = oddOrEven(numbers);
// console.log(number);
// ---------------------------------------------------
// Leap year or no (with exception years that are not 0 when divided by 400)
// ---------------------------------------------------
// function leapYear(years) {
//     if (years % 4 === 0 && years % 400 === 0) {
//         return "This year is a leap year";
//     }
//     else {
//         return "This year is not a leap year";
//     }
// }

// const value = 1800;
// const number = leapYear(value);
// console.log(number);
// ----------------------------------------------
// Find the elements in the array and
// find the sum of it
// Take  the odd numbers out of it
// Get the sum of all the odd numbers with the help of first addition function
// ---------------------------------------------
// function findSum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const index = i;
//         const element = array[index]
//         sum = sum + element;
//         console.log(index, element, sum);
//     }
//     return sum;
// }

// function findOddNum(numbers) {
//     const oddNum = []
//     for (let i = 0; i < numbers.length; i++) {
//         const index = i;
//         const element = numbers[i];
//         if (element % 4 !== 0)
//             console.log(index, element)
//             oddNum.push(element);
//     }
//     return oddNum;
// }

// const numbers = [21, 58, 25, 78, 36, 45, 21, 56];
// const odd = findOddNum(numbers);
// const addition = findSum(odd);
// console.log(addition)

// ----------------------------------------------------
// Do factorial of 7 reverse
// --------------------------------------------------------

// with for loop

// 7*6*5*4*3*2*1

// function factorial(number) {
//     let total = 1;
//     for (let i = number; i >= 1; i--) {
//         total = i * total;
//     }
//     return total;
// }
// const numbers = 7;
// const total = factorial(numbers);
// console.log(total);

// with while loop

// function factorial(number) {
//     let total = 1
//     while (number >= 1) {
//         total = total * number;
//         number--;
//     }
//     return total;
// }

// const numbers = 12;
// const total = factorial(numbers);
// console.log(total)