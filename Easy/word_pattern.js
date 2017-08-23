// Word Pattern

// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
var wordPattern = function(pattern, str) {
    let patternArr = pattern.split('');
    let strArr = str.split(' ');

    if (patternArr.length !== strArr.length){
        return false;
    }
    let wordHash = {};

    for (let i = 0; i < pattern.length; i++) {
        let letter = pattern[i];
        let word = strArr[i];

        if (wordHash[letter] === undefined) {
            wordHash[letter] = word;
        } else if (wordHash[letter] !== word) {
            return false;
        }
    }
    let test = {};

    for (let val in wordHash) {
        let word = wordHash[val];
        if (test[word] === undefined) {
            test[word] = true;
        } else {
            return false;
        }
    }

    return true;
};
