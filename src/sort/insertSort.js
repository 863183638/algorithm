/**
 * 插入排序
 */

 export default (arr) => {
     let i,j;
     for(i = 1; i < arr.length; i++) {
         let currentValue = arr[i];
         for(j = i - 1; j > -1 && arr[j] > currentValue; j--) {
             arr[j + 1] = arr[j];
         }
         arr[j + 1] = currentValue;
     }
     return arr;
 }