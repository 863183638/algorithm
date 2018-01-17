export default (target,arr) => {
    for(var i = 0; i < arr.length; i++) {
        if(target === arr[i]) {
            return i;
        }
    }
    return -1;
}