const countConsistentStrings = require('../Answers/1684.js');

function test1() {
    const allowed = "abc";
    const words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
    const expected = 7;
    const result = countConsistentStrings(allowed, words);
    console.log(result)
    console.log("Test 1:", result === expected ? 'Passed' : 'Failed')
}

function test2() {
    const allowed = "cad";
    const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
    const expected = 4;
    const result = countConsistentStrings(allowed, words);
    console.log(result)
    console.log("Test 2:", result === expected ? 'Passed' : 'Failed')
}

function test3() {
    const allowed = "a";
    const words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
    const expected = 3;
    const result = countConsistentStrings(allowed, words);
    console.log(result)
    console.log("Test 3:", result === expected ? 'Passed' : 'Failed')
}


test1();
test2();
test3();