/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 中心扩展法 遍历每个可能的中心点
// var longestPalindrome = function(s) {
//     if(!s.length) return ""
//     if(s.length === 1) return s
//     let result = s[0]
//     let maxLen = 0
//     // 以每个元素为中心点
//     for(let i = 0; i < s.length; i++){
//       // 以当前元素作为奇数中心点
//       let count = 0
//       let right = i
//       let left = i

//       while(left >= 0 && right < s.length && s[left] === s[right]){
//         const len = right-left + 1
//         if(len > maxLen){
//           maxLen = len
//           result = s.substring(left, right + 1)
//         }
//         left--
//         right++
//       }

//       // 以当前元素和后一个元素中间作为偶数中心点
//       count = 0
//       right = i+1
//       left = i
//       while(left >= 0 && right < s.length && s[left] === s[right]){
//         const len = right-left + 1
//         if(len > maxLen){
//           maxLen = len
//           result = s.substring(left, right + 1)
//         }
//         left--
//         right++
//       }
//     }
    
//     return result
// };

// // 优化写法
// var longestPalindrome = function(s) {
//   if(!s.length) return ""
//   if(s.length === 1) return s
  
//   let start = 0
//   let end = 0
//   for(let i = 0; i < s.length; i++){
//     // 奇数长度回文
//     let len1 = expandFromCenter(s,i,i)
//     // 偶数长度回文
//     let len2 = expandFromCenter(s,i,i+1)
//     let len = Math.max(len1, len2)
//     if(len > end-start){
//       start = i - Math.floor((len - 1) / 2);
//       end = i + Math.floor(len / 2)
//     }
//   }
//   const result = s.substring(start, end + 1)
//   return result
// }

// // 从中心向外扩展检查返回回文索引
// var expandFromCenter = function (s, left, right) {
//   while(left>=0 && right<s.length && s[left]===s[right]){
//     left--
//     right++
//   }
//   return right - left - 1
// }

// 动态规划
var longestPalindrome = (s) => {
  const n = s.length
  if(n < 2) return s

  // dp[i][j] 表示 s[i...j] 是否是回文串
  const dp = Array(n).fill(0).map(() => Array(n).fill(false))
  let maxLen = 1 //最长回文子串长度
  let start = 0 //最长回文子串的起始位置

  // 初始化所有长度为1的子串都是回文串
  for (let i = 0; i < n; i++){
    dp[i][i] = true
  }

  // 长度为2的子串，两元素相等的时候该子串为回文串
  for (let i = 0; i < n - 1; i++){
    if(s[i] === s[i + 1]){
      dp[i][i + 1] = true;
      maxLen = 2;
      start = i;
    }
  }

  // 长度大于等于3的子串 适用状态转移方程：如果 s[i] === s[j] 且 s[i+1...j-1] 是回文串，则 s[i...j] 也是回文串
  // len表示子串长度
  for(let len = 3; len <= n; len++) {
    // i 表示子串起始位置
    for (let i = 0; i <= n - len; i++){
      const j = i + len - 1
      // j 表示子串结束位置
      if(s[i] === s[j] && dp[i + 1][j - 1]){
        dp[i][j] = true;
        if(len > maxLen){
          maxLen = len
          start = i
        }
      }
    }
  }
  return s.substring(start, start + maxLen)
  
}
// @lc code=end

