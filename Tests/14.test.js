const longestCommonPrefix = require('../Answers/14.js');

// Test 1
function test1() {
    const strs = ['flower', 'flow', 'flight'];
    const expected = 'fl';
    const result = longestCommonPrefix(strs);
    console.log(result);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

// Test 2
function test2() {
    const strs = ['dog', 'racecar', 'car'];
    const expected = '';
    const result = longestCommonPrefix(strs);
    console.log(result);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

test1();
test2();
