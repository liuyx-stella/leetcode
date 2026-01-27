/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++){
//       for (let j = i+1; j < nums.length; j++){
//         if(nums[i] + nums[j] === target){
//           return [i,j]
//         }
//       }
//     }
// };

var twoSum = function(nums, target) {
  console.log(1);
  const tempMap = new Map();
  for (let i = 0; i < nums.length; i++){
    const currNum = nums[i];
    const targetNum = target - currNum;
    const targetNumIndex = tempMap.get(targetNum) ;
    if(targetNumIndex !== undefined){
      return [targetNumIndex,i]
    }else{
      tempMap.set(currNum, i)
    }
  }
}

// @lc code=end

