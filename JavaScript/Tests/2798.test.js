const numberOfEmployeesWhoMetTarget = require('../Answers/2798.js');

function test1() {
    const hours = [0,1,2,3,4];
    const target = 2;
    const output = 3;
    const result = numberOfEmployeesWhoMetTarget(hours, target);
    console.log("Test1:", result === output ? 'Passed' : 'Failed');
}

function test2() {
    const hours = [5,1,4,2,2];
    const target = 6;
    const output = 0;
    const result = numberOfEmployeesWhoMetTarget(hours, target);
    console.log("Test2:", result === output ? 'Passed' : 'Failed');
}


test1();
test2();