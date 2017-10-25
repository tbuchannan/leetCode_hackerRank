// Move Zeroes

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeroes = (nums) => {

  let switchMade = true;

  while(switchMade){
    switchMade = false;
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j <nums.length; j++) {
        let left = nums[i];
        let right = nums[j];
        let temp;
        if (left === 0 && right !== 0){
          temp = right;
          nums[j] = left;
          nums[i] = temp;
          switchMade = true;
        }
      }
    }
  }
};
