const finalValueAfterOperations = require('../Answers/2011.js');

// Test 1
function test1() {
    const operations = ["--X", "X++", "X++"];
    const expected = 1;
    const result = finalValueAfterOperations(operations);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

// Test 2
function test2() {
    const operations = ["++X", "++X", "X++"];
    const expected = 3;
    const result = finalValueAfterOperations(operations);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

// Test 3
function test3() {
    const operations = ["X++", "++X", "--X", "X--"];
    const expected = 0;
    const result = finalValueAfterOperations(operations);
    console.log('Test 3:', result === expected ? 'Passed' : 'Failed');
}

// Run tests
test1();
test2();
test3();