const reversePrefix = require("../Answers/2000.js");

function test1() {
    const word = "abcdef";
    const ch = "d";
    const expected = "dcbaef";
    const result = reversePrefix(word, ch);
    console.log("Test 1:", result === expected ? "Passed" : "Failed");
}

function test2() {
    const word = "xyxzxe";
    const ch = "z";
    const expected = "zxyxxe";
    const result = reversePrefix(word, ch);
    console.log("Test 2:", result === expected ? "Passed" : "Failed");
}

function test3() {
    const word = "abcd";
    const ch = "z";
    const expected = "abcd";
    const result = reversePrefix(word, ch);
    console.log("Test 3:", result === expected ? "Passed" : "Failed");
}

test1();
test2();
test3();