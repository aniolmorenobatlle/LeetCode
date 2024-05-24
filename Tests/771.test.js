const numJewelsInStones = require('../Answers/771.js');

// Test 1
function test1() {
    const jewels = 'aA';
    const stones = 'aAAbbbb';
    const expected = 3;
    const result = numJewelsInStones(jewels, stones);
    console.log(result);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

// Test 2
function test2() {
    const jewels = 'z';
    const stones = 'ZZ';
    const expected = 0;
    const result = numJewelsInStones(jewels, stones);
    console.log(result);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

test1();
test2();