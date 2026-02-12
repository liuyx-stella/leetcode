/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 处理边界情况：空链表或只有一个节点
    if (!head || !head.next) {
        return head;
    }
    
    let resHead = head
    let p = head.next
    resHead.next = null
    while(p){
      let next = p.next  // 先保存下一个节点
      p.next = resHead    // 反转当前节点
      resHead = p         // 更新结果头节点
      p = next            // 移动到下一个节点
    }
    return resHead
};
// @lc code=end

