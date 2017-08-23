// Ransom Note

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

var createHash = function(word){
    let result = {};

    for(let i = 0 ; i < word.length; i++){
        let letter = word[i];
        if(result[letter] === undefined){
            result[letter] = 1;
        }else{
            result[letter] += 1;
        }
    }
    return result;
};
var canConstruct = function(ransomNote, magazine) {
    let ransomHash = createHash(ransomNote);

    for(let i = 0; i < magazine.length; i++){
        let letter = magazine[i];
        if(ransomHash.hasOwnProperty(letter)){
            ransomHash[letter] -= 1;
        }
    }

    for(var letter in ransomHash){
        if(ransomHash[letter] > 0){
            return false;
        }
    }
    return true;
};
