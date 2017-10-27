// Given a string, your task is to count how many palindromic substrings in this string.
// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Note:
// The input string length won't exceed 1000.

const countSubstrings = (str) => {
    let count = 0;

    const isPalindrome = (string, left, right) => {
      while (left >= 0 && right < string.length && string[left] === string[right]){
        count++;
        left--;
        right++;
      }
    };

    for(let i = 0; i < str.length; i++) {
        isPalindrome(str, i, i);
        isPalindrome(str, i, i + 1);
    }

    return count;
};

 /*
 Start at the "middle" and extend outwards, incrementing count if the letters at
 that position are the same.

 Two calls are made to include both even and odd lengthed strings

 */
