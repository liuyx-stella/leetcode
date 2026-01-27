/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   let L1 = l1
//   let L2 = l2
//   let head = new ListNode(0)
//   let result = head
//   while (L1?.next || L2?.next || result?.next) {
//     if (!result.next) {
//       result.next = new ListNode(0)
//     } else {
//       result = result.next
//     }
//     const v1 = L1?.val || 0
//     const v2 = L2?.val || 0
//     const temp = result.val + v1 + v2
//     if (temp >= 10) {
//       result.val = temp - 10
//       result.next = new ListNode(1)
//     } else {
//       result.val = temp
//     }
//     if(L1) L1 = L1.next
//     if(L2) L2 = L2.next
//   }
//   return head
// };

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let p = l1, q = l2;
  let tail = dummy;
  let carry = 0;
  while(p !== null || q !== null || carry){
    const p1 = p ? p.val : 0 
    const p2 = q ? q.val : 0
    const sum = p1 + p2 + carry
    const val = sum % 10;
    carry = Math.floor(sum / 10)
    
    tail.next = new ListNode(val);
    tail = tail.next
    if(p) p = p.next
    if(q) q = q.next

  }
  return dummy.next

};
// @lc code=end

