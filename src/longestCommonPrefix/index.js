/**
 * @param {string[]} strs
 * @return {string}
 */

export default function (strs) {
    var common = '';

    if(strs.length  === 0) {
        return common;
    }
    if(strs.length === 1) {
        return strs[0];
    }
    
    for(var i = 1;i < strs.length; i++) {
        var str = '';
        var min = Math.min(strs[i].length,strs[i - 1].length);
        for(var j = 0;j < min; j++) {
            if(strs[i][j] === strs[i - 1][j]) {
                str += strs[i][j];
            } else {
                break;
            }
        }
        if(i === 1) {
            common = str;
        } else if (str.length < common.length) {
            common = str;
        }
        if(common === '') {
            break;
        }
    }
    return common;
}