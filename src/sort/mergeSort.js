/**
 * 合并排序
 */
 export default mergeSort;
 
 function mergeSort (arr) {
     if(arr.length < 2) {
         return arr;
     }

     let midIndex = Math.floor(arr.length / 2);
     let left = arr.slice(0,midIndex);
     let right = arr.slice(midIndex);

     return _handelSort(mergeSort(left),mergeSort(right));
 }

 function _handelSort (left,right) {
     let leftIndex = 0,
         rightIndex = 0,
         result = [];

     while (leftIndex < left.length && rightIndex < right.length) {
         if(left[leftIndex] < right[rightIndex]) {
             result.push(left[leftIndex++]);
         } else {
             result.push(right[rightIndex++]);
         }
     }
     return result.concat(left.slice(leftIndex),right.slice(rightIndex));
 }