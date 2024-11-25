const convertDateToBinary = require('../Answers/3280.js');

function test1() {
    const date = "2080-02-29";
    const expected = "100000100000-10-11101";
    const result = convertDateToBinary(date);
    console.log(result);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

function test2() {
    const date = "1900-01-01";
    const expected = "11101101100-1-1";
    const result = convertDateToBinary(date);
    console.log(result);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}


test1();
test2();