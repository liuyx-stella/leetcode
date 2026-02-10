/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0
    let res = 0
    let newIndex = 0
    for(let i = 1; i < nums.length; i++){
      if((nums[i] !== nums[i-1])){
        newIndex++
        nums[newIndex] = nums[i]
      }
    }
    res = newIndex
    newIndex++
    
    return res + 1
};
removeDuplicates([1,1,2])
// @lc code=end

