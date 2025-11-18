/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 我的思路：使用周期分组，在处理周期内情况
// var convert = function(s, numRows) {
//   if(s.length <= 2 || numRows === 1){
//     return s
//   }

//   let result = Array(numRows).fill(0).map(item => [])
  
//   const groupLen = numRows * 2 - 2

//   for(let i = 0; i < s.length; i++){
//     const index = (i + 1) % groupLen
//     if(index === 0){
//       result[1].push(s[i])
//     } else if(index <= numRows){
//       const firstIndex = index - 1
//       result[firstIndex].push(s[i])
//     } else {
//       const secondIndex = (numRows - (index % numRows) - 1) 
//       result[secondIndex].push(s[i])
//     }
//   }
//   return result.flat().join('')
// };

// 优化一版
// var convert = function(s, numRows) {
//   if(s.length <= 2 || numRows === 1){
//     return s
//   }

//   let result = Array(numRows).fill(0).map(item => [])
//   const cycleLen = numRows * 2 - 2 // 一个完整周期的长度

//   for(let i = 0; i < s.length; i++){
//     const pops = (i) % cycleLen // 在周期内的位置 (0 到 cycleLen-1)
//     if(pops < numRows){
//       // 向下走：直接放在 pos 行
//       result[pops].push(s[i])
//     } else {
//       // 向上走：放在 cycleLen - pos 行
//       result[cycleLen - pops].push(s[i])
//     }
//   }
//   return result.flat().join('')
// };

// 最优解: 按行模拟
var convert = function(s, numRows) {
  if(numRows === 1 || s.length < numRows) return s
  // 生成的行数组 （数组中每个元素用来保存最后每行的字符串）
  const rows = new Array(numRows).fill('')
  // 行数组索引
  let currentIndex = 0

  // 控制方向
  let goingdown = false

  for(ch of s){
    rows[currentIndex] += ch
    if(currentIndex === 0 || currentIndex === numRows - 1) goingdown = !goingdown
    currentIndex += goingdown ? 1 : -1
  }

  return rows.join('');
  
};

// @lc code=end

