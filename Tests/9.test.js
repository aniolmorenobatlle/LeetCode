const isPalindrome = require('../Answers/9.js');

function test1() {
    const x = 121;
    const expected = true;
    const result = isPalindrome(x);
    console.log(result);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

function test2() {
    const x = -121;
    const expected = false;
    const result = isPalindrome(x);
    console.log(result);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

function test3() {
    const x = 10;
    const expected = false;
    const result = isPalindrome(x);
    console.log(result);
    console.log('Test 3:', result === expected ? 'Passed' : 'Failed');
}

test1();
test2();
test3();
