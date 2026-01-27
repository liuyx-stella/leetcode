/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 分而治之 每个柱子能接多少水由改柱子本身的高度和该柱子左边最高的柱子和右边最高的柱子决定 
// 使用前缀/后缀最大值数组优化时间复杂度
// var trap = function(height) {
//   let leftMaxHeights = []
//   let sum = 0
//   // 从左往右数找每个柱子左边的最大柱子的高度
//   for(let i = 0; i < height.length; i++){
//     if(i === 0){
//       leftMaxHeights[i] = height[i] 
//     } else {
//       leftMaxHeights[i] = Math.max(leftMaxHeights[i-1], height[i])
//     }
//   }
//   console.log(leftMaxHeights)
//   // 从右往左找每个柱子右边的最大柱子的高度
//   let rightMaxHeights = []
//   for(let i = height.length-1; i >= 0; i--){
//     if(i === height.length-1){
//       rightMaxHeights[i] = height[i]
//     } else {
//       rightMaxHeights[i] = Math.max(rightMaxHeights[i+1], height[i])
//     }
//   }
//   console.log(rightMaxHeights)

//   for(let i = 0; i < height.length; i++){
//     let minMaxHeight = Math.min(leftMaxHeights[i], rightMaxHeights[i])
//     sum += minMaxHeight - height[i]
//   }

//   return sum;

// }

// 采用双指针可优化空间复杂度
/**
 * lmax left左边最大值
 * rmax right右边最大值
 * 当lmax<rmax时 可以确定left处元素的高度, 因为(rmax从右往左单调增), 所以left处右边最大柱子的高度一定大于等于当前rmax一定大于lmax,lmax是left处左右两边最高柱子的最小值以可以确定left处元素的高度
 * 当rmax<lmax时 可以确定right处元素的高度, 因为(lmax从左往右单调增), 所以right处左边最大柱子的高度一定大于等于当前lmax一定大于rmax,rmax是right处左右两边最高柱子的最小值,所以可以确定right处元素的高度
 */

var trap = function(height){
  let lmax = 0
  let rmax = 0
  let l = 0
  let r = height.length - 1
  let sum = 0
  while(l < r){
    lmax = Math.max(lmax, height[l])
    rmax = Math.max(rmax, height[r])
    if(lmax < rmax){
      sum += (lmax - height[l])
      l++
    } else {
      sum += (rmax - height[r])
      r--
    }
  }
  return sum
}


// @lc code=end

trap([0,1,0,2,1,0,1,3,2,1,2,1])
