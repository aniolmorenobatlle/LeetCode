const maximumWealth = require('../Answers/1672.js')

function test1() {
    const accounts = [[1,2,3],[3,2,1]]
    const output = maximumWealth(accounts)
    const expected = 6
    console.log(output)
    console.log('Test1 : ', output === expected ? 'Passed' : 'Failed')
}

function test2() {
    const accounts = [[1,5],[7,3],[3,5]]
    const output = maximumWealth(accounts)
    const expected = 10
    console.log(output)
    console.log('Test2 : ', output === expected ? 'Passed' : 'Failed')
}

function test3() {
    const accounts = [[2,8,7],[7,1,3],[1,9,5]]
    const output = maximumWealth(accounts)
    const expected = 17
    console.log(output)
    console.log('Test3 : ', output === expected ? 'Passed' : 'Failed')
}


test1()
test2()
test3()