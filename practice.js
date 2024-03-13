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
// ------------------------------------------------------
// Hours to mins
// -----------------------------------------
// function findMin(hour) {
//     const value = hour * 60;
//     console.log(value);
// }

// const hours = 24;
// findMin(hours)
// ------------------------------------------------------------------
// Write a function findLeapYear() that will take the array below and will check if each year is a leap year.
// if there is  leap years in the array put them in a different array and show that array as an result
// -----------------------------------------------------------------------
// function findLeapYear(year) {
//     let leapYears = [];
//     for (let i = 0; i < year.length; i++) {
//         const index = i;
//         const elements = year[index];
//         if (elements % 4 === 0 && elements % 4 !== 400) {
//             leapYears.push(elements);
//         }
//     }
//     return leapYears;
// }

// const years = [2023, 2024, 2025, 2028, 2030];
// const thisIsLeapYears = findLeapYear(years);
// console.log(thisIsLeapYears);
// ----------------------------------------------------------------
// Find the max number from the three numbers below with function and if-else
// ------------------------------------------------------------------
// Max number with if-else

// function findMax(numbers) {

//     for (let i = 0; i < 1; i++) {
//         const index = i;
//         // console.log(index);
//         const elements = numbers[index];
//         // console.log(elements);
//         if (numbers[0] > numbers[2] && numbers[0] < numbers[1]) {
//             console.log(numbers[0], 'is the biggest number');
//         }
//         else if (numbers[1] < numbers[0] && numbers[1] < numbers[2]) {
//             console.log(numbers[1], 'is the biggest number');
//         }
//         else {
//             console.log(numbers[2], 'is the biggest number');
//         }
//     }
// }


// const values = [23, 89, 69];
// findMax(values);

// Max number with Math.max in an function using spread syntax that i didn't kno '...'

// function findMax(numbers) {
//     return Math.max(...numbers);
// }

// const numbers = [25, 999, 332];
// const maxNumber = findMax(numbers);
// console.log(maxNumber);

// Min number with if-else

// function findMin(numbers) {

//     for (let i = 0; i < 1; i++) {
//         const index = i;
//         // console.log(index);
//         const elements = numbers[index];
//         // console.log(elements);
//         if (numbers[0] < numbers[2] && numbers[0] < numbers[1]) {
//             console.log(numbers[0], 'is the smallest number');
//         }
//         else if (numbers[1] < numbers[0] && numbers[1] < numbers[2]) {
//             console.log(numbers[1], 'is the smallest number');
//         }
//         else {
//             console.log(numbers[2], 'is the smallest number');
//         }
//     }
// }


// const values = [6, 8459, 69];
// findMin(values);

// Min number with Math.min

// function findMin(numbers) {
//     return Math.min(...numbers);
// }

// const values = [65, 9, 123];
// const minNumber = findMin(values);
// console.log(minNumber, 'is the smallest number');