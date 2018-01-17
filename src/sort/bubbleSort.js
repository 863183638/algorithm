/**
 * 冒泡排序
 */
export default (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            arr[j] > arr[j + 1]  ? swap(arr,j,j + 1) : null;
        }
    }
    return arr;
}

function swap (arr,pre,next) {
    let temp = arr[pre];
    arr[pre] = arr[next];
    arr[next] = temp;
}