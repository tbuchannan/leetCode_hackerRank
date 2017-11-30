/*
 * 142. Linked List Cycle II
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 * Note: Do not modify the linked list.
 *
 * Follow up:
 * Can you solve it without using extra space?
*/

const detectCycle = (head) => {
  if(head === null || head.next === null){
    return null;
  }

  let slowPointer = head;
  let fastPointer = head;

  while (true) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if(fastPointer === null || fastPointer.next === null){
      return null;
    }

    if(slowPointer === fastPointer){
      break;
    }
  }

  slowPointer = head;

  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
};
