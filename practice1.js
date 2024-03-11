// Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call foo() foo to see the output

function foo() {
    console.log('foo')
    bar();
}

foo();

function bar() {
    console.log('bar')
}

// Write a function called make_avg() which wil take three integers and return the average of those values

function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3
    var average = total / 3
    average = average.toFixed(2)
    average = parseFloat(average)
    return average;
}

// totalAverage = make_avg(25, 52, 80);
// console.log(totalAverage)

// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values



