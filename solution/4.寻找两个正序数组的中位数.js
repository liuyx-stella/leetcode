/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 把两个数组归并到中位数的长度 时复o(m+n) 空复o(len)
// 可以不用单独把传入的数组存起来 节约存储空间
// var findMedianSortedArrays = function(nums1, nums2) {
//   const arr = []
//   const maxArr = nums1.length > nums2.length ? nums1 : nums2
//   const minArr = nums1.length > nums2.length ? nums2 : nums1
//   let p = 0
//   let q = 0
//   const len = Math.floor((maxArr.length + minArr.length)/2) + 1
  
//   while(arr.length < len){
//     if(p < maxArr.length && q < minArr.length){
//       if(maxArr[p] < minArr[q]){
//         arr.push(maxArr[p])
//         p++
//       } else {
//         arr.push(minArr[q])
//         q++
//       }
//     } else if (p === maxArr.length){
//       arr.push(minArr[q])
//       q++
//     } else {
//       arr.push(maxArr[p])
//       p++
//     }
//   }
//   const middle = (maxArr.length + minArr.length)%2 === 1 ? arr[len-1] : (arr[len-1] + arr[len-2])/2
//   return Number(middle.toFixed(5))
// };

// 通过写法优化一版 时复o(m+n) 空复o（1）
// var findMedianSortedArrays = function(nums1, nums2) {
//   const m = nums1.length, n = nums2.length;
//   const total = m + n;
//   const target = Math.floor(total / 2) + 1;
  
//   // i，j,count做指针，prev，curr记录元素值
//   let i = 0, j = 0, count = 0;
//   let prev = 0, curr = 0;

//   while(count < target){
//     //prev记录curr前一个
//     prev = curr
//     if(i<m && (nums1[i] < nums2[j] || j>=n)){
//       // curr = nums1[i]
//       // i++
//       curr = nums1[i]
//     } else {
//       // curr = nums2[j]
//       // j++
//       curr = nums2[j]
//     }
//     count++
//   }

//   if(total % 2 === 1) return curr
//   return  (prev + curr) / 2 
// }

/**
 * 
 通过二分划分 分别对两个数组进行切割，把两个数组各自较小的一半拼起来从而作为整体数组的较小一半 和 两个数组各自较大的一半拼起来从而作为整体数组的较大一半，找中位数就变成了找划分点
 （核心：在较短数组上二分一个切分 i，使得左半最大 ≤ 右半最小，从而直接得到中位数。）
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let A = nums1, B = nums2;
  if(A.length > B.length) [A, B] = [B, A]//保证A更短
  const m = A.length, n = B.length;
  let left = 0, right = m;
  const half = Math.floor((m + n + 1) / 2);

  while(left <= right){
    const i = Math.floor((left + right) / 2);
    const j = half - i;

    const Aleft = i > 0 ? A[i - 1] : -Infinity;
    const Aright = i < m ? A[i] : Infinity;
    const Bleft = j > 0 ? B[j - 1] : -Infinity;
    const Bright = j < n ? B[j] : Infinity;

    // 第一组左半最大<=第二组右半最小（保证了第一组左半所有数小于合起来的右半）
    // 第一组右半最小>=第二组左半最大，（保证了第二组左半所有数小于合起来的右半）
    // 因此找到了正确切分
    if(Aleft <= Bright && Bleft <= Aright){
      if ((m + n) % 2 === 1) {
        return Math.max(Aleft, Bleft);
      }
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
     // 第一组左半最大 > 第二组右半最小,说明第一组左半有点大往回退
    } else if(Aleft > Bright){
      right = i - 1
    } else {
      left = i + 1
    }
  }
  return 0
}

// // @lc code=end

