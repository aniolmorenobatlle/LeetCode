const subtractProductAndSum = require("../Answers/1281.js");

function test1() {
    const n = 234;
    const expected = 15;
    const result = subtractProductAndSum(n);
    console.log(result);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

function test2() {
    const n = 4421;
    const expected = 21;
    const result = subtractProductAndSum(n);
    console.log(result);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

test1();
test2();