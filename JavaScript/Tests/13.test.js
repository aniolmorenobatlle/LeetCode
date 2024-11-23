const romanToInt = require('../Answers/13.js');

// Test 1
function test1() {
    const s = 'III';
    const expected = 3;
    const result = romanToInt(s);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

// Test 2
function test2() {
    const s = 'IV';
    const expected = 4;
    const result = romanToInt(s);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

// Test 3
function test3() {
    const s = 'IX';
    const expected = 9;
    const result = romanToInt(s);
    console.log('Test 3:', result === expected ? 'Passed' : 'Failed');
}

test1();
test2();
test3();
