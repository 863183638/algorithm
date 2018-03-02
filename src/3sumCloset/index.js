/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

export default function (nums, target) {
    var minDiff = Number.MAX_VALUE;
    var result;
    if(nums.length <= 3) {
        return nums.reduce(function(a,b){return a +b})
    }
    
    nums.sort(function(a,b){return a -b});
    
    for(var i = 0; i < nums.length - 2; i++) {
        if(i != 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        
        var last = target - nums[i];
        var left = i + 1,right = nums.length - 1;
        while (left < right) {
            if(minDiff > Math.abs(nums[left] + nums[right] - last)) {
                minDiff = Math.abs(nums[left] + nums[right] - last);
                result = nums[left] + nums[right] + nums[i];
            }
            
            if(minDiff === 0) {
                break;
            }
            
            if(last > nums[left] + nums[right] ) {
                left++;
            } else if(last < nums[left] + nums[right]) {
                right--;
            }
        }
    }
    return result;
}