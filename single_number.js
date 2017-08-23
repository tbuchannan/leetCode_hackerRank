// Single Number

// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
var singleNumber = function(nums) {
    let result = nums[0];
    for(let i = 1; i < nums.length; i++){
        result ^= nums[i];
    }
    return result;

};
