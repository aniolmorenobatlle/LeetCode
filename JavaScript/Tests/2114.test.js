const mostWordsFound = require('../Answers/2114.js');

// Test 1
function test1() {
    const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
    const expected = 6;
    const result = mostWordsFound(sentences);
    console.log('Test 1:', result === expected ? 'Passed' : 'Failed');
}

// Test 2
function test2() {
    const sentences = ["leetcode"];
    const expected = 1;
    const result = mostWordsFound(sentences);
    console.log('Test 2:', result === expected ? 'Passed' : 'Failed');
}

// Test 3
function test3() {
    const sentences = ["please wait", "continue to fight", "continue to win"]
    const expected = 3;
    const result = mostWordsFound(sentences);
    console.log('Test 3:', result === expected ? 'Passed' : 'Failed');
}


// Run tests
test1();
test2();
test3();