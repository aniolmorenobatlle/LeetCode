const getSneakyNumbers = require('../Answers/3289.js');

function test1() {
    const nums = [0, 1, 1, 0];
    const expected = [0, 1];
    const result = getSneakyNumbers(nums);
    console.log(result)
    console.log('Test 1:', getSneakyNumbers(result, expected) ? 'Passed' : 'Failed');
}

function test2() {
    const nums = [0, 3, 2, 1, 3, 2];
    const expected = [2,3];
    const result = getSneakyNumbers(nums);
    console.log(result)
    console.log('Test 2:', getSneakyNumbers(result, expected) ? 'Passed' : 'Failed');
}

function test3() {
    const nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];
    const expected = [4, 5];
    const result = getSneakyNumbers(nums);
    console.log(result)
    console.log('Test 3:', getSneakyNumbers(result, expected) ? 'Passed' : 'Failed');
}


test1();
test2();
test3();