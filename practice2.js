// Find odd or even with return and parameter
function odd_even(number) {
    var remainder = number % 2;
    if (remainder == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}

var number = 66;
console.log(odd_even(number))

// Find odd or even number with no return but just parameter
function odd_even(number) {
    var remainder = number % 2;
    if (remainder == 0) {
        console.log('Even');
    }
    else {
        console.log('Odd');
    }
}

var number = 56;
odd_even(number);
