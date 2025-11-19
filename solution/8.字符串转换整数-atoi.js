/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function(s) {
//   const MIN = Math.pow(-2, 31)
//   const MAX = Math.pow(2, 31) - 1
//   //标记是否已经开始处理
//   let hasStarted = false
//   let result = ''
//   let flag = ''
//   // 循环字符串 把符号和数字部分取出
//   for (ch of s) {
//     if(((ch === '-' || ch === '+') && result === '' && flag === '')){
//       flag = ch
//       hasStarted = true
//     }else if('0' <= ch && ch <= '9'){
//       result += ch
//       hasStarted = true
//     }else if(ch === ' ' && !hasStarted){//未开始处理前把空格都跳过
//       continue
//     }else {
//       break
//     }
//   }
//   // // 给前导0计数, 去除前导0  【无需此步 Number 会自动处理前导零】
//   // let num0 = 0
//   // for(ch of result){
//   //   if(ch === '0'){
//   //     num0++
//   //   } else {
//   //     break
//   //   }
//   // }
//   // result = result.length > 1 ? result.slice(num0) : result
//   let resultNum =  flag === '-' ? -Number(result) : Number(result)
  
//   if (resultNum < MIN) return MIN;
//   if (resultNum > MAX) return MAX;
//   return resultNum;
// };

// 最优解
// 单趟扫描，严格按题意执行“空格→符号→数字→截断”流程。
var myAtoi = function(s) {
  const MAX = Math.pow(2, 31) - 1
  const MIN = Math.pow(-2, 31)

  let i = 0
  let len = s.length
  let sign = 1
  let result = 0

  // 1. 跳过前导空格
  while (i < len && s[i] === ' '){
    i++
  }

  // 2. 处理符号
  if (i < len && (s[i] === '+' || s[i] === '-')){
    if(s[i] === '-') sign = -1
    i++
  }

  // 3. 扫描数字，遇到非数字立即停止
  while (i < len && s[i] >= '0' && s[i] <= '9'){
    const digit = Number(s[i])

    // 4. 溢出预判：在 result*10 前就截断
    if(result > Math.floor(MAX/10) || (result === Math.floor(MAX/10) && digit > (sign === 1 ? MAX%10 : Math.abs(MIN%10)))){
      return sign === 1 ? MAX : MIN
    }

    result = (result * 10 + digit)
    i++
  }

  return sign * result
}
// @lc code=end

