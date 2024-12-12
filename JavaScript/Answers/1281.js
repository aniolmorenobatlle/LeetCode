/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    let numbers_to_string = n.toString()
    let numbers = numbers_to_string.split('')
    let product = 1
    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        product *= parseInt(numbers[i])
        sum += parseInt(numbers[i])
    }

    return product - sum
};

module.exports = subtractProductAndSum