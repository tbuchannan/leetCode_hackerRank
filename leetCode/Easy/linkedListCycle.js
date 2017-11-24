/*
 * 141. Linked List Cycle
 *
 *  Given a linked list, determine if it has a cycle in it.
 *
 *  Follow up:
 *  Can you solve it without using extra space?
*/


const hasCycle = (head) => {
  if (head === null || head.next === null){
    return false;
  }
  
  let slowPointer = head;
  let fastPointer = head.next;

  while (slowPointer !== fastPointer){
    if(fastPointer === null || fastPointer.next === null){
      return false;
    } else {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
  }

  return true;
};
