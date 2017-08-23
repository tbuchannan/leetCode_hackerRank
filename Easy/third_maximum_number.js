// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
//
// Example 1:
// Input: [3, 2, 1]
//
// Output: 1
//
// Explanation: The third maximum is 1.
// Example 2:
// Input: [1, 2]
//
// Output: 2
//
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
// Example 3:
// Input: [2, 2, 3, 1]
//
// Output: 1
//
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.


var thirdMax = function(nums) {
  let sortedArr = [];

  for(let i = 0; i < nums.length; i++) {
    let number = nums[i];
    if(sortedArr.indexOf(number) === -1) {
      sortedArr.push(number);
    }
  }
  
  //this way of sorting is relatively slow, and gets a lot slower the larger the array
  sortedArr = sortedArr.sort(function(a, b){return a - b;});

  return sortedArr.length >= 3 ? sortedArr[sortedArr.length - 3] : sortedArr[sortedArr.length - 1];

};