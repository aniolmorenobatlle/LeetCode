/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {

    const result = [];

    const contador = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (contador[num]) {
            
            contador[num]++;
            result.push(num);

        } else {
            contador[num] = 1;
        }
    }

    return result.sort();
    
};


module.exports = getSneakyNumbers;