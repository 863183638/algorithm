/**
 * @param {number[]} nums
 * @param {number} result
 * @return {number[][]}
 */

export default function(nums,result) {
    if(nums.length < 3)
        return [];
    var res = [];
    nums.sort(function(a,b){return a-b});
    var target, l, r, temp;
    for(var i=0;i<nums.length-2;i++) {
        if(i!==0 && nums[i]===nums[i-1])
            continue;
        target = result - nums[i];
        l = i + 1, r = nums.length - 1;
        while(l < r) {
            if(nums[l] + nums[r] === target) {
                res.push([nums[i], nums[l], nums[r]]);
                temp = nums[l];
                while(l < r && nums[l] === temp)
                    l++;
                temp = nums[r];
                while(l < r && nums[r] === temp) 
                    r--;
            } else if(nums[l] + nums[r] < target)
                l++;
            else r--;
        }
    }
    return res;
}