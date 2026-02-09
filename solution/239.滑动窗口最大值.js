/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let l = 0
//     let r = k
//     const maxNums = []
        // i没有实际作用 使用for循环可读性不强， 可以换成for循环
//     for(let i = k; i <= nums.length; i++){
//       let max = nums[l]
//      for(let j = l; j < r; j++){
//       max = Math.max(max, nums[j])
//      }
//      l++
//      r++
//      maxNums.push(max)
//     }
//     return maxNums
// };
// 优化可读性 
// var maxSlidingWindow = function(nums, k) {
//   let l = 0
//   let r = k
//   const maxNums = []
//   while(r < n){
//     let max = nums[l]
//    for(let j = l; j < r; j++){
//     max = Math.max(max, nums[j])
//    }
//    l++
//    r++
//    maxNums.push(max)
//   }
//   return maxNums
// };

// 之前的时间复杂度太高了是O(n * k)
// 最优解 单调队列 
// 思想 
// 遍历当前窗口时把过程中遇到的可能是后面窗口最大值的元素也记录下来，从而不用回头看
// （维护队列单调性以使得留下可能是后面窗口最大值的元素）
// var maxSlidingWindow  = function(nums, k){
//   let deque = [] //维护一个对应值单调递减的索引队列
//   let res = [] // 用于存放结果
//   for(let i = 0; i < nums.length; i++){
//     // 队尾维护单调递减 (队列中比当前数字小的就不会是后面窗口的最大值)
//     while(deque.length && nums[deque[deque.length - 1]] <= nums[i]){
//       deque.pop();
//     }
//     deque.push(i)

//     // 队头如果滑出了窗口就把队头从队列中删掉 存的是索引可以通过索引直接判断是不是移出了窗口
//     if(deque[0] <= i - k) {
//       deque.shift()
//     }

//     // 当形成第一个完整窗口时（i >= k - 1），开始记录答案
//     if(i >= k - 1) {
//       res.push(nums[deque[0]])
//     }
//   }
// }

var maxSlidingWindow = function(nums, k){
  let deque = []
  let res = []
  for(let i = 0; i < nums.length; i++){
    while(deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop()
    }
    deque.push(i)
    if(deque[0] <= i - k){
      deque.shift()
    }
    if(i >= k - 1){
      res.push(nums[deque[0]])
    }
  }
  return res
}
// @lc code=end
