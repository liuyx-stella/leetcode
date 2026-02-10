/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 循环过程中记录当前非0元素前面有几个0，则在最终结果中该非0元素就应该往前移动几位
// var moveZeroes = function(nums) {
//   let zeroNum = 0
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] === 0){
//       zeroNum++
//     } else {
//       if(zeroNum > 0){
//         nums[i - zeroNum] = nums[i]
//         nums[i] = 0
//       }
//     }
//   }
// };
// 双指针法
// l r 都从头出发 r遇到非0数字和l交换数字
var moveZeroes = function(nums) {
  let l = 0, r = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[r] !== 0){
      let temp = nums[r]
      nums[r] = nums[l] 
      nums[l] = temp
      r++
      l++
    } else {
      r++
    }
  }
};
// @lc code=end


[1,0,0,3,12]
