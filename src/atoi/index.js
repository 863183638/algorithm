/**
 * @param {string} str
 * @return {number}
 */

 export default function (str) {
    let input = str.trim().match(/^[+|-]?[0-9]*/)[0];
    if( input !== '' && input !== '-') {
        if(input === '+') {
            return 0;
        }
        var num = Number(input);
        if(num > 2147483647) {
            return 2147483647;
        }
        
        if(num < -2147483648) {
            return -2147483648;
        }
        
        return Math.floor(num);
    } else {
        return 0;
    }
 };