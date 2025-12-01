/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let i = 0;
  let j = 0;
  while(i < s.length){
    if(p[j]){
      if(s[i] === p[j] || p[j] === '.'){
        i++;
        j++
      } else if (p[j] === '*' && (s[i] === p[j - 1] || p[j - 1] === '.')){
        i++
      } else {
         return false
      }
    } else {
      return false
    }
  }
  return true
};

// @lc code=end

