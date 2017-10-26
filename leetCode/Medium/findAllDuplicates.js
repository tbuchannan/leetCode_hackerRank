// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements that appear twice in this array.
//
// Could you do it without extra space and in O(n) runtime?
//
// Example:
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

/* Exra Space and O(n) */
const findDuplicates = (nums) => {
  let seen = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (seen[num] === undefined){
      seen[num] = 1;
    } else {
      seen[num] += 1;
    }
  }

  for (let key in seen) {
    let val = seen[key];
    if (val > 1) {
      result.push(parseInt(key));
    }
  }

  return result;
};

/* No Extra Space and O(n) */
const findAllDuplicates = (nums) => {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0){
      result.push(Math.abs(nums[i]));
    } else {
      nums[index] *= -1;
    }
  }

  for (let j = 0; j < nums.length; j++) {
    nums[j] = Math.abs(nums[j]);
  }
  return result;
};
