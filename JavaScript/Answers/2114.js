/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let most = 0

    for (let i = 0; i < sentences.length; i++) {
        const wordCount = sentences[i].split(" ").length

        if (wordCount > most) most = wordCount
    }


    return most
    
};

module.exports = mostWordsFound