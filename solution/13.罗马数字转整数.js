/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 我的思路：从左到右扫描 遇到特殊情况跳两位
var romanToInt = function(s) {
    let map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
      'IV': 4,
      'IX': 9,
      'XL': 40,
      'XC': 90,
      'CD': 400,
      'CM': 900
    }
    let result = 0
    for(let i=0; i < s.length; i++){
      let tempIndex = i + 1
      if((s[i] === 'I' && tempIndex < s.length  &&  ['V', 'X'].includes(s[tempIndex])) ||
         (s[i] === 'X' && tempIndex < s.length  &&  ['L', 'C'].includes(s[tempIndex])) ||
         (s[i] === 'C' && tempIndex < s.length  &&  ['D', 'M'].includes(s[tempIndex])) ){ 
          result += map[s[i] + s[tempIndex]]
          console.log('i', i, s[i] + s[tempIndex], map[s[i] + s[tempIndex]],);
          // 注意这里要跳两位，for循环中第三条件会计算，这里是i++，所有下面显示只要加1位
          i += 1
      } else {
        result += map[s[i]]
        console.log('i', i, s[i], map[s[i]]);
        
        // console.log('map[s[i]]', map[s[i]]);
      }

      // console.log('result', result);
      
    }

    return result
};

// 优化一版 去掉了三段复杂条件判断
var romanToInt = function(s) {
  let map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  let result = 0
  for(let i = 0; i < s.length; i++){
    if (i + 1 < s.length) {
      const two = s[i] + s[i+1];
      if (two in map) {
        result += map[two];
        i++;
        continue; // 立即结束当前循环的本次迭代跳到下一迭代 i++
      }
    }
    // 否则就是单字符
    result += map[s[i]]
  }

  return result
};
romanToInt("MCMXCIV")

// 最优解
var romanToInt = function(s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let result = 0;
  for (let i = 0; i < s.length; i++){
    const value = map[s[i]];
    const nextValue = i + 1 < s.length ? map[s[i + 1]] : 0;
    
    if (value < nextValue) {
      result -= value;
    } else {
      result += value;
    }
  }

  return result;
}

// @lc code=end

