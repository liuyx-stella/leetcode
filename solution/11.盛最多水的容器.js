/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 我的解法：双重循环 超时
// var maxArea = function(height) {
//   let maxArea = 0
//   for(let i=0; i<height.length-1; i++){
//     for(let j=i+1; j<height.length; j++){
//       maxArea = Math.max((Math.min(height[i],height[j]) * (j-i)), maxArea)
//     }
//   }
//   return maxArea
// };

// 最优解
//当前面积受短板限制。保持短板不变只会让宽度变小，面积不增；只有换一块可能更高的板子，才可能提高 min(h)。因此移动短板是唯一有机会增加面积的选择。
var maxArea = function(height) {
  let maxArea = 0
  let i = 0, j = height.length - 1
  while(i < j){
    maxArea = Math.max((Math.min(height[i],height[j]) * (j-i)), maxArea)
    if(height[i] < height[j]){
      i++
    } else {
      j--
    }
  }
  return maxArea
};
// @lc code=end

