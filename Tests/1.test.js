const twoSum = require('../Answers/1.js');

// Test 1
function test1() {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    console.log('Test 1:', arraysEqual(result, expected) ? 'Passed' : 'Failed');
}

// Test 2
function test2() {
    const nums = [3, 2, 4];
    const target = 6;
    const expected = [1, 2];
    const result = twoSum(nums, target);
    console.log('Test 2:', arraysEqual(result, expected) ? 'Passed' : 'Failed');
}

// Test 3
function test3() {
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    console.log('Test 3:', arraysEqual(result, expected) ? 'Passed' : 'Failed');
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Run tests
test1();
test2();
test3();
