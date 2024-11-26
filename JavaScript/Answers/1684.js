/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    let contador = 0
        
    for (let i = 0; i < words.length; i++) {
        let isConsistent = true

        for (let j = 0; j < words[i].length; j++) {

            if (!allowed.includes(words[i][j])) {
                isConsistent = false
                break
            }
        }
        if (isConsistent) contador++
    }

    return contador

};

module.exports = countConsistentStrings