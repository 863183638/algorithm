/**
 * 选择排序
 */

 export default (arr) => {
     for(let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr,i,minIndex);
     }
     return arr;
 }

 function swap (arr,pre,next) {
    if(pre == next) return;
    let temp = arr[pre];
    arr[pre] = arr[next];
    arr[next] = temp;
}