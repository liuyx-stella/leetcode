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

// 优化写法
var longestPalindrome = function(s) {
  if(!s.length) return ""
  if(s.length === 1) return s
  
  let start = 0
  let end = 0
  for(let i = 0; i < s.length; i++){
    // 奇数个回文
    let len1 = expandFromCenter(s,i,i)
    // 偶数个回文
    let len2 = expandFromCenter(s,i,i+1)
    let len = Math.max(len1, len2)
    if(len > end-start){
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2)
    }
  }
  const result = s.substring(start, end + 1)
  return result
}

// 从中心回文
var expandFromCenter = function (s, left, right) {
  while(left>=0 && right<s.length && s[left]===s[right]){
    left--
    right++
  }
  return right - left - 1
}

// @lc code=end

