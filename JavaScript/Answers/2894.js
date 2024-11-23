/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisible = 0;
    let noneDivisible = 0;

    for(var i = 1; i <= n; i++) {
        if(i % m == 0) {
            divisible += i;
        } else {
            noneDivisible += i;
        }
    }

    return noneDivisible - divisible;
};

module.exports = differenceOfSums;