/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {

    let contador = 0

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) contador++
    }
    
    return contador
};

module.exports = numberOfEmployeesWhoMetTarget