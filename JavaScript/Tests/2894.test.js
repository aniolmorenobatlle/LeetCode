const differenceOfSums = require('../Answers/2894.js');

// test 1
function test1() {
    const n = 10;
    const m = 3;
    const expected = 19;
    const result = differenceOfSums(n, m);
    console.log(result);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

// test 2
function test2() {
    const n = 5;
    const m = 6;
    const expected = 15;
    const result = differenceOfSums(n, m);
    console.log(result);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

test1();
test2();