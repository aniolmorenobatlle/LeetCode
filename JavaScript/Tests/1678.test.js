const interpret = require('../Answers/1678.js');

function test1() {
    const command = "G()(al)";
    const output = "Goal";
    const result = interpret(command);
    console.log(result)
    console.log("Test 1:", result === output ? 'Passed' : 'Failed')
}

function test2() {
    const command = "G()()()()(al)";
    const output = "Gooooal";
    const result = interpret(command);
    console.log(result)
    console.log("Test 2:", result === output ? 'Passed' : 'Failed')
}

function test3() {
    const command = "(al)G(al)()()G";
    const output = "alGalooG";
    const result = interpret(command);
    console.log(result)
    console.log("Test 3:", result === output ? 'Passed' : 'Failed')
}


test1();
test2();
test3();