/* 2. Add Two Numbers
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single
 * digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

 /**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  **/

  const addTwoNumbers = (listOne, listTwo) => {
    let carry = 0;
    let result = new ListNode(0);
    let temp = temp;
    while (listOne !== null && listTwo !== null){
      let value = (listOne.val + listTwo.val + carry) % 10;
      carry = Math.floor((listOne.val + listTwo.val + carry)/10);
      temp.next = new ListNode(value);
      temp = temp.next;
      listOne = listOne.next;
      listTwo = listTwo.next;
    }

    while (listOne !== null){
      let value = (listOne.val + carry) % 10;
      carry = Math.floor((listOne.val + carry)/10);
      temp.next = new ListNode(value);
      temp = temp.next;
      listOne = listOne.next;
    }

    while (listTwo !== null){
      let value = (listTwo.val + carry) % 10;
      carry = Math.floor((listTwo.val + carry)/10);
      temp.next = new ListNode(value);
      temp = temp.next;
      listTwo = listTwo.next;
    }

    if (carry !== 0){
      temp.next = new ListNode(carry);
    }

    return result.next;
  };
