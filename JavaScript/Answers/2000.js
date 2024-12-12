/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {

    if (word.includes(ch)) {
        
        // trobar index
        let index = word.indexOf(ch)

        // revertir fins index
        let reversedPart = word.slice(0, index + 1).split('').reverse().join('')

        // afegir resta de la paraula
        let remainingPart = word.slice(index + 1)

        // ajuntar parts
        let result = reversedPart + remainingPart

        return result

    } else {
        return word
    }
    
};

module.exports = reversePrefix