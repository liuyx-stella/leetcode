/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 我的思路: 字符串反转 空复、时复都是O(log₁₀(|x|))(数字位数)
var reverse = function(x) {
  let str =  x.toString();
  if(x < 0){
    str = str.slice(1, str.length)
  }

  const result = x < 0 ? Number('-' + [...str].reverse().join('')) : Number( [...str].reverse().join(''))
  const MIN = (-2)**31
  const MAX = 2**31 - 1
  if( MIN > result || result > MAX){
    return 0
  }
  return result
};

// 优化一版
var reverse = function(x) {
  // 使用更准确常量
  const MIN = Math.pow(-2, 31)
  const MAX = Math.pow(2, 31) - 1

  // 处理符号
  const isNegative = x < 0;
  const str =  Math.abs(x).toString();

  // 反转字符串
  const reversedStr  = str.split('').reverse().join('');
  const result =  isNegative ? -Number(reversedStr) : Number(reversedStr)

  // 检查边界
  if (result < MIN || result > MAX) {
    return 0;
  }

  return result;
};

// 最优解 时间复杂度O(n) 空间复杂度O(1)
var reverse = function(x) {
  // 使用更准确常量
  const MIN = Math.pow(-2, 31) //  -2147483648
  const MIN_LAST_DIGIT = MIN % 10;  // -8 (注意：-2147483648 % 10 = -8)
  const MAX = Math.pow(2, 31) - 1 // 2147483647
  const MAX_LAST_DIGIT = MAX % 10;  // 7

  let result = 0

  // 从后往前循环构建新数字
  while (x !== 0) {
    // 获取最后一位数字(包含负数)
    const digit = x % 10;
    x = Math.trunc(x / 10); // 向0取整，统一处理正负数 (x去掉一位后的数字)

    // 检查溢出（在乘以10之前）(先计算再检查 可能在计算这步就计算到错误的值)
    // 如果 result > MAX/10，那么 result * 10 一定 > MAX
    // 如果 result === MAX/10 且 digit > 7，那么 result * 10 + digit > MAX
    if(result > Math.floor(MAX / 10) || (result === Math.floor(MAX / 10) && digit > MAX_LAST_DIGIT) ){
      return 0;
    }
    if(result < Math.ceil(MIN / 10) || (result === Math.ceil(MIN / 10) && digit < MIN_LAST_DIGIT) ){
      return 0;
    }

    result = result * 10 + digit;
  }

  return result;
 
}
// @lc code=end

