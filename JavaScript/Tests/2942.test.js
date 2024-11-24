const findWordsContaining = require('../Answers/2942.js');

function test1() {
    const words = ["leet","code"];
    const x = "e";
    const expected = [0, 1];
    const result = findWordsContaining(words, x);
    console.log(result)
    console.log('Test 1:', JSON.stringify(result) === JSON.stringify(expected) ? 'Passed' : 'Failed');
}

function test2() {
    const words = ["abc","bcd","aaaa","cbc"];
    const x = "a";
    const expected = [0, 2];
    const result = findWordsContaining(words, x);
    console.log(result)
    console.log('Test 2:', JSON.stringify(result) === JSON.stringify(expected) ? 'Passed' : 'Failed');
}

function test3() {
    const words = ["abc","bcd","aaaa","cbc"];
    const x = "z";
    const expected = [];
    const result = findWordsContaining(words, x);
    console.log(result)
    console.log('Test 3:', JSON.stringify(result) === JSON.stringify(expected) ? 'Passed' : 'Failed');
}

test1();
test2();
test3();