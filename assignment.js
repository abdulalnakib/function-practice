// ---------------------------------------------------
// Write a function that'll return the cube of the input value [bonus] if the parameter is something other than a number like string it'll show a error return
// ---------------------------------------------------------

// function cubeNumber(number) {
//     const cube = number * number * number;
//     if (typeof number !== 'number') {
//         return 'Invalid';
//     }
//     return cube;
// }

// const number = 4;
// const cube = cubeNumber(number);
// console.log(cube);

// ------------------------------------------------------------
// Write an function of an match finder where there are two strings and if there is similarities in both string the return will show true and if there isn't any similarities then it'll show false [bonus] if there is anything other than a string in the input an error message will be returned
// ---------------------------------------------------------------

// function matchFinder(string1, string2) {
//     if (typeof string1 !== 'string' || typeof string2 !== 'string') {
//         console.log('Invalid');
//         return;
//     }

//     const set1 = string1;
//     const set2 = string2;
//     if (set1.includes(set2)) {
//         console.log('true');
//     }
//     else if (set2.includes(set1)) {
//         console.log('true');
//     }
//     else {
//         console.log('false');
//     }
// }

// const string1 = 'John Doe';
// const string2 = 'ohn';
// matchFinder(string1, string2);

// ---------------------------------------------------------------
// Write a function that get an array only with 2 numbers and the function has to sort the array from larger to smaller number and if the both numbers are equal the return input should be equal [bonus] if the any one of the numbers in the array is negative the return will show invalid input
// ------------------------------------------------------------------

// function sortMaker(arr) {
//     let newArr = [];
//     let theNum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         if (num < 0) {
//             console.log('invalid input');
//         }
//         else if (num > theNum) {
//             theNum = num;
//             newArr.unshift(num);
//         }
//         else if (num < theNum) {
//             newArr.push(num);
//         }
//         else if (num === theNum) {
//             console.log('equal')
//         }
//     }
//     return newArr;
// }

// const arr = [4, 4];
// const newArr = sortMaker(arr);
// console.log(newArr);

// --------------------------------------------------------------
// Write a function that'll only show the values of the properties ib the object
// -------------------------------------------------------------------

// function findAddress(obj) {
//     const answers = Object.values(obj);
//     return answers;
// }

// const obj = {
//     street: 10,
//     house: '15A',
//     society: 'Earth perfect'
// }
// const output = findAddress(obj);
// console.log(output);

// --------------------------------------------------------------------
// Write a function that'll add the changes to buy the stuff and if the sum is larger or equal to the price of the product show true otherwise show false [bonus] show invalid if the change array is empty
// -------------------------------------------------------------------

// function canPay(changeArray, totalDue) {
//     if (changeArray.length !== 3) {
//         console.log('Invalid');
//         return;
//     }
//     let allMoney = 0;
//     for (let i = 0; i < changeArray.length; i++) {
//         const change = changeArray[i];
//         allMoney = change + allMoney;
//     }
//     if (allMoney >= totalDue) {
//         console.log('true');
//     }
//     else if (allMoney < totalDue) {
//         console.log('false');
//     }
// }

// const changeArray = [1, 2, 5];
// const totalDue = 10;
// canPay(changeArray, totalDue);