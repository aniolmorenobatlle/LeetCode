/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let I = 1;
    let V = 5;
    let X = 10;
    let L = 50;
    let C = 100;
    let D = 500;
    let M = 1000;

    let result = 0;

    let split = [];

    for (let i = 0; i < s.length; i++) {
        split.push(s[i]);
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] === 'I') {
            if (split[i + 1] === 'V') {
                result += 4;
                i++;
            } else if (split[i + 1] === 'X') {
                result += 9;
                i++;
            } else {
                result += I;
            }
        } else if (split[i] === 'V') {
            result += V;
        } else if (split[i] === 'X') {
            if (split[i + 1] === 'L') {
                result += 40;
                i++;
            } else if (split[i + 1] === 'C') {
                result += 90;
                i++;
            } else {
                result += X;
            }
        } else if (split[i] === 'L') {
            result += L;
        } else if (split[i] === 'C') {
            if (split[i + 1] === 'D') {
                result += 400;
                i++;
            } else if (split[i + 1] === 'M') {
                result += 900;
                i++;
            } else {
                result += C;
            }
        } else if (split[i] === 'D') {
            result += D;
        } else if (split[i] === 'M') {
            result += M;
        }
    }
    return result;
};

module.exports = romanToInt;
