// Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
//
// Example 1:
// Input: [3, 2, 1]
// Output: 1
// Explanation: The third maximum is 1.

// Example 2:
// Input: [1, 2]
// Output: 2
// Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: [2, 2, 3, 1]
// Output: 1
// Explanation: Note that the third maximum here means the third maximum distinct number.
// Both numbers with value 2 are both considered as second maximum.



const thirdMax = (numArray) => {
  let arrObj = {};

  for(let i = 0; i < numArray.length; i++) {
    let number = numArray[i];
    arrObj[number] =  number;
  }
  let first = null;
  let second = null;
  let third = null;
  for(let key in arrObj){
    let val = arrObj[key];
    if (key > first){
      third = second;
      second = first;
      first = val;
    } else if (key > second) {
      third = second;
      second = val;
    } else if (key > third) {
      third = val;
    }
  }

  return third === null ? first : third;
};
