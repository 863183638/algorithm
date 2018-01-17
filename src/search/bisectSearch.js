export default bisectSearch;

function bisectSearch (target,arr,left,right) {
    let start = left || 0;
    let end = right || arr.length -1;
    let mid = Math.floor((end - start) / 2) + start;

    if(target === arr[mid]) {
        return mid;
    }
    if(start >= end) {
        return -1;
    } else if(target > arr[mid]) {
        return bisectSearch(target,arr,mid + 1,end);
    } else if(target < arr[mid]) {
        return bisectSearch(target,arr,start,mid - 1);
    }

    return -1;
}