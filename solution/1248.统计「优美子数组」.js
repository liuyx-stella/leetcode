/*
 * @lc app=leetcode.cn id=1248 lang=javascript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 与和为k的子数组思路完全一致 记录前缀奇数+哈希表
var numberOfSubarrays = function(nums, k) {
    let count = 0
    let preOddMap = new Map()
    preOddMap.set(0, 1)
    let preOdd = 0

    for(let i = 0; i < nums.length; i++){
      if(nums[i] % 2 === 1){
        preOdd++
      }
      // console.log('preOdd', preOdd);
      
      let target = preOdd - k
      if(preOddMap.has(target)){
        count += preOddMap.get(target)
      }
      preOddMap.set(preOdd, (preOddMap.get(preOdd) || 0) + 1)
      // console.log('preOddMap', preOddMap);
    }

    return count
};
// numberOfSubarrays([1,1,2,1,1])

// @lc code=end

