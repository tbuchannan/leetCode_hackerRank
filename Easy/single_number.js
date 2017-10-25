// Single Number

// Given an array of integers, every element appears twice except for one. Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
const singleNumber = (numArray) => {
    let result = numArray[0];
    for(let i = 1; i < numArray.length; i++){
        result ^= numArray[i];
    }
    return result;

};
