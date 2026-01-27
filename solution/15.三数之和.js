/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 我的思路 三重循环 label + findIndex去重，问题
/**
 * 三重循环本身是 O(n3)，再加上你每次命中后用 findIndex 去线性查重，整体最坏接近 \(O(n^4)\)，数组稍大就会超时。sort用法有坑，默认用unicode编码排序，数字排序不准
 */
// var threeSum = function(nums) {
//   let result = []
//   for(let i = 0; i < nums.length - 2; i++){
//     for(let j = i + 1; j < nums.length - 1; j++){
//       for(let k = j + 1; k < nums.length; k++){
//         if (nums[i] + nums[j] + nums[k] == 0 ){
//           const arr = [nums[i], nums[j], nums[k]].sort((a,b) => a - b)
//           const label = arr.join('-')
//           const isExist = result.findIndex(x => x.label === label)
          
//           if(isExist === -1){
//             result.push({
//               label: arr.join('-'),
//               value: arr
//             })
//           }
//         }
//       }
//     }
//   }
//   result = result.map(item => item.value)
//   return result
// };

// 优化一版 用set去重 + 数值排序 + 简单剪枝 时间复杂度还是太高
// var threeSum = function(nums) {
//   // 先给数组整体排序下
//   nums.sort((a, b) => a - b);

//   const seen = new Set()
//   const res = [];
//   const n = nums.length;

//   for(let i = 0; i < n-2; i++){
//     // 剪枝：最小三数都 > 0，后面不可能有解
//     if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break;
//     // 剪枝：nums[i] + 最大两个都 < 0，当前 i 不可能有解
//     if (nums[i] + nums[n - 2] + nums[n - 1] < 0) continue;
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const triplet = [nums[i], nums[j], nums[k]];
//           const key = triplet.join(',')
//           if(!seen.has(key)) {
//             seen.add(key);
//             res.push(triplet)
//           }
//         }
//       }
//     }
//   }
//   return res
// };

// 最优解
// var threeSum = function(nums) {
//   nums.sort((a, b) => a - b);
//   const res = [];
//   const n = nums.length;

//   for(let i = 0; i < n - 2; i++){
//     // 排序过的最小数>0 剪枝
//     if(nums[i] > 0) break;
//     // 排序后相邻相等直接去重（这里相当于找以第一个元素时去重）
//     if(i > 0 && nums[i] === nums[i - 1]) continue;

//     //nums[i]作为第一个我元素后，在 [i+1, n-1] 上找两数 目标变成：找 nums[l] + nums[r] == -nums[i]。
//     let l = i + 1, r = n - 1;
//     while (l < r) {
//       const sum = nums[i] + nums[l] + nums[r];
//       if(sum === 0) {
//         res.push([nums[i], nums[l], nums[r]]);
//         l++; r--;
//         // 排序后（这里相当于找到一组第二个和第三个元素后，分别去掉和第二个元素相等的和第三个元素相等的）
//         while (l < r && nums[l] === nums[l - 1]) l++;
//         while (l < r && nums[r] === nums[r + 1]) r--;
//       } else if (sum < 0){
//         l++;
//       } else {
//         r--;
//       }
//       // r 左移会让 nums[r] 变小，从而让 sum 变小。 这就是双指针能在有序数组上高效工作的核心逻辑。
//     }
//   }
//   return res
// };

// 最优解 默写版
var threeSum = function(nums) {
  nums.sort((a,b) => a - b)
  const res = []
  const n = nums.length

  for(let i = 0; i < n-2; i++){
    if(nums[i] > 0) break
    if(i>0 && nums[i] === nums[i-1]) continue

    let l = i + 1
    let r = n - 1
    while (l < r){
      const sum = nums[i] + nums[l] + nums[r]
      if( sum === 0){
        res.push([nums[i], nums[l], nums[r]])
        l++; r--
        while(l<r && nums[l] === nums[l-1]) l++
        while(l<r && nums[r] === nums[r+1]) r--
      } else if (sum < 0){
        l++
      } else {
        r--
      }
    }
  }

  return res
}

// @lc code=end
