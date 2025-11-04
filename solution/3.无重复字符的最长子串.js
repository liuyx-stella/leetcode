/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let noRepeateMap = new Map()
//     let p = 0, q = 0 
//     let lenArr = []
//     let len = 0

//     for (let i = 0 ; i < s.length; i++){
//       if(noRepeateMap.get(s[i]) === unidefined){
//         noRepeateMap.set(s[i], i)
//         len++
//         q++
//       } else {
//         lenArr.push(len)
//         p = noRepeateMap.get(s[i])
//       }
//     }
// };

// 相当于从每个字母往回看找出不重复子串（利用滑动窗口始终维护不重复子串），记录其长度然后比大小
var lengthOfLongestSubstring = function(s) {
  let left = 0
  const lastIndexMap = new Map()
  let ans = 0

  for(let right = 0; right < s.length; right++ ){
    const ch = s[right]
    if(lastIndexMap.has(ch)){
      // 确保左边落在滑动窗口内
      left = Math.max(left, lastIndexMap.get(ch) + 1)
    }
    lastIndexMap.set(ch, right)
    ans = Math.max(ans, right - left + 1)
  }
  return ans
};
// @lc code=end

