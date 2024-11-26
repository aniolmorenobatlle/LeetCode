const smallestEvenMultiple = require('../Answers/2413.js');

function test1() {
    const n = 5;
    const output = 10;
    const result = smallestEvenMultiple(n);
    console.log(result)
    console.log("Test 1:", result === output ? 'Passed' : 'Failed')
}

function test2() {
    const n = 7;
    const output = 420;
    const result = smallestEvenMultiple(n);
    console.log(result)
    console.log("Test 2:", result === output ? 'Passed' : 'Failed')
}

function test3() {
    const n = 10;
    const output = 2520;
    const result = smallestEvenMultiple(n);
    console.log(result)
    console.log("Test 3:", result === output ? 'Passed' : 'Failed')
}


test1();
test2();
test3();