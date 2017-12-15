// 500. Keyboard Row

// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
//
//
// American keyboard
//
//
// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

// Can be solved with some stupid regex one liner.....

const findWords = (words) => {
  let result = [];
  let rows = {
    "q":1, "w":1, "e":1, "r":1, "t":1, "y":1, "u":1, "i":1, "o":1, "p":1,
    "a":2, "s":2, "d":2, "f":2, "g":2, "h":2, "j":2, "k":2, "l":2,
    "z":3, "x":3, "c":3, "v":3, "b":3, "n":3, "m":3
  };

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let row = rows[word[0].toLowerCase()];

    if (singleRow(rows, word, row)) {
      result.push(word);
    }
  }

  return result;
};

const singleRow = (rows, word, row) => {

  for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLowerCase();
    if (rows[letter] !== row ) {
      return false;
    }
  }

  return true;
};
