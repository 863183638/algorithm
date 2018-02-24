/**
 * @param {string} str
 * @param {number} numRows
 * @return {string}
 */
export default function (str, numRows) {
    if(numRows === 1)
		return str;

    let stringLength = str.length;
    let period = 2 * numRows - 2 ;
    let peroidCount = Math.floor(stringLength / period);
    let remain = stringLength % period;
    let remainRow = remain - numRows;
    let result = "";

    for(let i = 0 ; i < numRows ; i ++) {
    	let j = 0 ;
    	for(j = 0 ; j < peroidCount ; j ++) {
    		if(i === 0 || i === numRows - 1) {
    			result += str[i + period * j];
    		} else {
    			result += str[i + period * j] + str[i + (numRows - (i + 1)) * 2 + period * j];
    		}

    	}
    	if(remain > 0) {
    		if(i === 0 || i === numRows - 1) {
    			result += str[i + period * j];
    		} else {
    			result += str[i + period * j];
    			if(remainRow + i === numRows - 1) {
    				result += str[i + (numRows - (i + 1)) * 2 + period * j];
    				remainRow --;
    			}

    		}
    		
    		remain --;
    	}
    }
    return result;
}