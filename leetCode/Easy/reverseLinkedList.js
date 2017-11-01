// Reverse a singly linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const reverseList = (root) => {
  return reverseLinkedList(root, null);
};

const reverseLinkedList = (currHead, newHead) => {
  if (currHead === null){
    return newHead;
  }
  
  let nextNode = currHead.next;
  currHead.next = newHead;
  return reverseLinkedList(nextNode, currHead);
};
