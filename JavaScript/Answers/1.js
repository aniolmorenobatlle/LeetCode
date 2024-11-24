/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    
    const seen = {}

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i]
        const diference = target - currentNum

        if (seen[diference] != undefined) {
            return [seen[diference], i]
        }

        seen[currentNum] = i
    }

};

module.exports = twoSum;
