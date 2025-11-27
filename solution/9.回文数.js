/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 我的思路1：动态规划 构建是否回文串数组dp[i][j]表示s[i...j]是否为回文数组 s[i] === s[j] 且s[i+1...j-1]为回文数组则s[i][j]为回文数组
// var isPalindrome = function(x) {
//     const s = x.toString()
//     if(s.length === 0) return true

//     let dp = Array(s.length).fill(0).map(item => Array(s.length).fill(0))

//     for(let i = 0; i < s.length; i++){
//       dp[i][i] = 1
//     }

//     for(let i = 1; i < s.length; i++){
//       if(s[i - 1] === s[i]){              
//         dp[i - 1][i] = 1
//       } else {
//         dp[i - 1][i] = 0
//       }
//     }
//     for(let len = 3; len <= s.length; len++){   
//       for(let i = 0; i <= s.length-len; i++){
//         const j = i + len - 1
        
//         if(s[i] === s[j] && dp[i+1][j-1] === 1){
//           dp[i][j] = 1
//         } else {
//           dp[i][j] = 0
//         }
//         console.log(i, j, dp[i][j])
//       }
//     }

//     return dp[0][s.length - 1] ===  1 ? true : false
    
// };

// 我的思路2：把数字转换为字符串 从两边向中间比较
// var isPalindrome = function(x) {
//   const s = x.toString()
//   let m
//   if(x < 0) return false
//   if(s.length % 2 === 1){
//     m = Math.floor(s.length / 2)
//     for (let i = 0; i < m; i++){
//       if(s[i] !== s[m + 1 + (m - i - 1)]){
//         return false
//       }
//     }
//   } else {
//     m = s.length / 2
//     for (let i = 0; i < m; i++){
//       if(s[i] !== s[m - 1 + (m - i)]){
//         return false
//       }
//     }
//   }
//   return true
// }

// 优化一版 奇偶无需循环两次 直接用左右双指针即可
// var isPalindrome = function (x) {
//   // 1. 负数直接不是回文
//   if (x < 0) return false;

//   const s = x.toString();
//   let left = 0;
//   let right = s.length - 1;

//   // 2. 双指针从两边向中间收缩
//   while(left < right){
//     if (s[left] !== s[right]){
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

// 最优解
// 不用字符串 直接数字层面操作 只反转后半部分的数字
var isPalindrome = function (x) {
  // 负数 或 以 0 结尾但不等于 0，直接不是回文
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let rev = 0;

  // 反转“后半部分”的数字
  while (x > rev) {
    rev = rev * 10 + (x % 10);   // 把末位加到 rev
    x = Math.floor(x / 10);      // 去掉 x 的末位
  }

  // 偶数位：x === rev
  // 奇数位：去掉 rev 的中间那一位，即 rev / 10
  /**
   * 负数一定不是回文。
以 0 结尾但不是 0 的数也不是回文（例如：10, 100）。
用一个变量 rev 来存“后半段反转后的数字”：
每次取 x 的最后一位拼到 rev 后面；
同时把 x 去掉最后一位。
当 x <= rev 时，说明已经处理到一半：
如果位数为偶数：x === rev。
如果位数为奇数：中间那一位无论是什么都不影响回文，所以比较 x === Math.floor(rev / 10)。
代码
   */
  return x === rev || x === Math.floor(rev / 10);
};
// @lc code=end
