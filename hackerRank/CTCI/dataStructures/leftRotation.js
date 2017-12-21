// Arrays: Left Rotation

// Given an array of  integers and a number, , perform  left rotations on the array. Then print the updated array as a single line of space-separated integers.
//
// Input Format
//
// The first line contains two space-separated integers denoting the respective values of  (the number of integers) and  (the number of left rotations you must perform).
// The second line contains  space-separated integers describing the respective elements of the array's initial state.
//
// Constraints
//
// Output Format
//
// Print a single line of  space-separated integers denoting the final state of the array after performing  left rotations.
//
// Input
// 5 4
// 1 2 3 4 5

// Sample Output
// 5 1 2 3 4
// Explanation
//
// When we perform  left rotations, the array undergoes the following sequence of changes:
//
// Thus, we print the array's final state as a single line of space-separated values, which is 5 1 2 3 4.

// TODO:  refactor later
var leftRotation = (rotations, arr) => {
  return (arr.slice(rotations).concat(arr)).slice(0, arr.length);
};

// This works where the amount of rotations may be larger than the array itself
var leftRotationTwo = (rotations, arr) => {
  let result = [];
  let position = rotations % arr.length;
  while (result.length < arr.length) {
    result.push(arr[position]);
    position = (position + 1) % arr.length;
  }
  return result;
};
