export default function (a,b) {
    let output = [];
    let arr1 = a.split('').reverse();
    let arr2 = b.split('').reverse();
    let length = Math.max(arr1.length,arr2.length);
    let over = 0;
    for(var i =0; i < length; i++) {
        let temp = Number(arr1[i] || 0) + Number(arr2[i] || 0) + over;
        over = Math.floor(temp / 10);
        output.push(temp % 10);
    }
    over > 0 ? output.push(over) : null;
    return output.reverse().join('');
}