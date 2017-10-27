// Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:
//
// The root is the maximum number in the array.
// The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
// The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.
// Construct the maximum tree by the given array and output the root node of this tree.
//
// Example 1:
// Input: [3,2,1,6,0,5]
// Output: return the tree root node representing the following tree:
/*

       6
   ____|____
  |         |
  3         5
  |_       _|
    |     |
    2     0
    |__
       |
       1

*/
// Note: The size of the given array will be in the range [1,1000].

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const constructMaximumBinaryTree = (nums) => {
  if (nums.length < 1){
    return null;
  }
  let max = nums[0];
  let index = null;

  nums.forEach( (num, idx) => {
    if (num > max ){
      max = num;
      index = idx;
    }
  });

  let root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index+1));

  return root;
};
