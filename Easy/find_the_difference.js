//
// Given two strings s and t which consist of only lowercase letters.
//
// String t is generated by random shuffling string s and then add one more letter at a random position.
//
// Find the letter that was added in t.
//
// Example:
//
// Input:
// s = "abcd"
// t = "abcde"
//
// Output:
// e
//
// Explanation:
// 'e' is the letter that was added.
var createStringObj = function(string) {
  let obj = {};
  for(let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter] += 1;
    }
  }
  return obj;
};

var findTheDifference = function(s, t) {
  let shuffledString = createStringObj(t);

  for(let i = 0; i < s.length; i++) {
    let letter = s[i];
    shuffledString[letter] -= 1;
  }

  for (var key in shuffledString) {
    let value = shuffledString[key];
    if (value > 0){
      return key;
    }
  }

};
