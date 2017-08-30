// Given a positive integer num, write a function which returns True if num is a perfect square else False.
//
// Note: Do not use any built-in library function such as sqrt.
//
// Example 1:
//
// Input: 16
// Returns: True
// Example 2:
//
// Input: 14
// Returns: False


var isPerfectSquare = function(num) {
  let end = num / 2;
  let start = 1;

  if (num === 1) {
    return true;
  }
  while (start < end) {
    if (start * start === num) {
      return true;
    }
    start += 1;
  }

  return false;



};
