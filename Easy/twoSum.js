// Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (numArray, target) => {
    for (let i = 0; i < numArray.length -1; i++){
        for (let j = i + 1; j <numArray.length; j++){
            if (numArray[i] + numArray[j] === target){
                return [i, j];
            }
        }
    }
};
