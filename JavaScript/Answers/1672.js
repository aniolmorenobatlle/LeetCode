/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

    let maxNum = 0;

    for (let i = 0; i < accounts.length; i++) {

        let sumaActual = 0

        for (let j = 0; j < accounts[i].length; j++) {
            sumaActual += accounts[i][j]
        }

        if (sumaActual > maxNum) {
            maxNum = sumaActual
        }
    }
    
    return maxNum
};

module.exports = maximumWealth