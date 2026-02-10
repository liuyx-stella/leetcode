/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力解法
// var subarraySum = function(nums, k) {
//   let sum = 0
//   for(let i = 0; i < nums.length; i++){
//       let temp = 0
//       let j = i 
//       while(j < nums.length){
//         temp += nums[j]
//         if(temp === k){
//           sum++
//         }
//         j++
//       }
//   }
//   return sum
// };

// 最优解
// 用哈希数组来存储数组中截至每个元素未知的前缀和, 
// 找和为k的子数组相当于找在当前i之前有没有值为（当前前缀和 - k）的前缀和
// 找到就相当于找到了从 前面的前缀和对应索引到当前前缀和索引-1 为和为k的子数组序列
var subarraySum = function(nums, k){
  let prefixNumMap = new Map();
  prefixNumMap.set(0,1);
  let count = 0
  let preNum = 0
  for(let i = 0; i < nums.length; i++){
    preNum += nums[i]
    let target = preNum - k
    if(prefixNumMap.has(target)){
      count += prefixNumMap.get(target)
    }
    prefixNumMap.set(preNum, (prefixNumMap.get(preNum) || 0) + 1)
  }
  return count
}
// @lc code=end


