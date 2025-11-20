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
var isPalindrome = function(x) {
    const s = x.toString()
    if(s.length === 0) return true

    let dp = Array(s.length).fill(0).map(item => Array(s.length).fill(0))

    for(let i = 0; i < s.length; i++){
      dp[i][i] = 1
    }

    for(let i = 1; i < s.length; i++){
      if(s[i - 1] === s[i]){              
        dp[i - 1][i] = 1
      } else {
        dp[i - 1][i] = 0
      }
    }
    for(let len = 3; len <= s.length; len++){   
      for(let i = 0; i <= s.length-len; i++){
        const j = i + len - 1
        
        if(s[i] === s[j] && dp[i+1][j-1] === 1){
          dp[i][j] = 1
        } else {
          dp[i][j] = 0
        }
        console.log(i, j, dp[i][j])
      }
    }

    return dp[0][s.length - 1] ===  1 ? true : false
    
};
isPalindrome(121)

// @lc code=end
