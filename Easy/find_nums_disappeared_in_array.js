// Find All Numbers Disappeared in an Array

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements of [1, n] inclusive that do not appear in this array.
//
// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//
// Example:
//
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [5,6]

var createObj = function(nums){
    let result = {};

    for(let i = 0; i < nums.length; i++){
        let number = nums[i];
        if(result.hasOwnProperty(number)){
            result[number] += 1;
        } else {
            result[number] = 1;
        }
    }
    return result;
};
var findDisappearedNumbers = function(nums) {
    let numbHash = createObj(nums);
    let result = [];
    for(let i = 1; i <= nums.length; i++){
        if (!numbHash.hasOwnProperty(i)){
            result.push(i);
        }
    }
    return result;



};
