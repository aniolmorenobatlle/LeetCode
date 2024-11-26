/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    
    let [year, month, day] = date.split("-")

    let year_binary = parseInt(year).toString(2)
    let month_binary = parseInt(month).toString(2)
    let day_binary = parseInt(day).toString(2)

    let result = year_binary + "-" + month_binary + "-" + day_binary    

    return result

};

module.exports = convertDateToBinary