/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
var twoSum = function (nums, target) {
    const map = new Map;
    numsLen = nums.length;
    for (let i = 0, complement; i < numsLen; ++i) {
        complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}


/* function twoSum(nums, target) {
    var arr = [];
    var indexnum = [];

    for (var x = 0; x < nums.length; x++) {
        if (arr[nums[x]] != null) {
            var index = arr[nums[x]];
            indexnum[0] = index;
            indexnum[1] = x;
            break;
        }
        else {
            arr[target - nums[x]] = x;
        }
    }
    return indexnum;
} */
console.log(twoSum([2, 7, 11, 15], 9));