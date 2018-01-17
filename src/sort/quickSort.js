/**
 * 快速排序
 */
 export default quickSort;

 function quickSort (arr) {
     if(arr.length < 2) {
         return arr;
     }

     let midIndex = Math.floor(arr.lenght / 2);
     let midValue = arr.splice(midIndex,1)[0];
     let left = [];
     let right = [];

     for(let i = 0; i < arr.length; i++) {
         arr[i] > midValue ? right.push(arr[i]) : left.push(arr[i]);
     }

     return quickSort(left).concat([midValue],quickSort(right));
 }