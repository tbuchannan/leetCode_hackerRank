/*
 * 26. Remove Duplicates from Sorted Array
 * Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Example:
 *
 * Given nums = [1,1,2],
 *
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
*/

const removeDuplicates = (nums) => {
  let ptr1 = 0;
  let ptr2 = 1;
  let changes = 0;
  while (ptr2 < nums.length) {
    if (nums[ptr1] !== nums[ptr2]) {
      ptr1++;
      nums[ptr1] = nums[ptr2];
      changes++;
    }
      ptr2++;
    }
    return changes + 1;
};
