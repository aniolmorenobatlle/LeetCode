/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {

    let parser = ""

    const result = command.match(/G|\(\)|\(al\)/g);

    for (let i = 0; i < result.length; i++) {
        if (result[i] == "G") {
            parser += ("G")
        } else if (result[i] == "()") {
            parser += ("o")
        } else if (result[i] == "(al)") {
            parser += ("al")
        }
    }

    return parser
    
};

module.exports = interpret