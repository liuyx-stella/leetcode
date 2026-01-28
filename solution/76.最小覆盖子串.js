/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// var minWindow = function(s, t) {
//     let temp = t
//     let r = 0
//     let l = 0
//     let arr = []
//     for(let i = 0; i < s.length; i++){
//       if(temp.includes(s[i])){
//         if(temp.length === t.length){
//           r = i
//           l = r
//         }
//         let index = temp.indexOf(s[i])
//         temp = temp.slice(0, index) + temp.slice(index + 1)
//         l++
//         if(temp.length === 0){
//           arr.push(s.slice(r, l+1))
//           temp = t
//         }
//       } else {
//         l++
//       }
//     }
//     const result = arr.sort((a, b) => {
//       return a.length - b.length
//     })
//     return result.length > 0 ? result[0] : []
// };

var minWindow = function(s, t){
  // 边界情况处理
  if(!s || !t || s.length < t.length){
    return ""
  }

  // 1.统计 t 中每个字符的数量 （即目标要达到的数量）
  const need = new Map();
  for (let char of t) {
    need.set(char, (need.get(char) || 0) + 1)
  }

  // 2.滑动窗口变量初始化
  let left = 0 //左指针
  let right = 0 // 右指针
  let valid = 0 // 窗口中满足条件的字符种类数
  let start = 0 // 最小窗口的起始位置
  let len = Infinity // 最小窗口的长度
  const window = new Map() // 窗口中目标字符的计数

  while (right < s.length) {
    const c = s[right];
    right++;

    if(need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1)

      if(window.get(c) === need.get(c)) {
        valid++
      }
    }

    while (valid === need.size) {
      if(right - left < len){
        start = left
        len = right - left
      }
      const d = s[left]
      left++
      
      if(need.has(d)) {
        if(window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);

      }
    }
  }

  return len === Infinity ? "" : s.substring(start, start + len)

}

// @lc code=end

