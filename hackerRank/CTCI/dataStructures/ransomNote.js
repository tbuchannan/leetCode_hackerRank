// Hash Tables: Ransom Note
//
// A kidnapper wrote a ransom note but is worried it will be traced back to him. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use whole words available in the magazine, meaning he cannot use substrings or concatenation to create the words he needs.
//
// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
//
// Input Format
//
// The first line contains two space-separated integers describing the respective values of  (the number of words in the magazine) and  (the number of words in the ransom note).
// The second line contains  space-separated strings denoting the words present in the magazine.
// The third line contains  space-separated strings denoting the words present in the ransom note.
//
// Output Format
//
// Print Yes if he can use the magazine to create an untraceable replica of his ransom note; otherwise, print No.
//
// Sample Input 0
//
// 6 4
// give me one grand today night
// give one grand today
// Sample Output 0
//
// Yes
// Sample Input 1
//
// 6 5
// two times three is not four
// two times two is four
// Sample Output 1
//
// No
// Explanation 1

var ransomNote = (magazine, note) => {
  let magazineFreq = wordFreq(magazine);
  let noteFreq = wordFreq(note);

  for (let i = 0; i < note.length; i++) {
    let word = note[i];
    if (magazineFreq[word] === undefined || magazineFreq[word] <= 0) {
      return "No";
    } else {
      magazineFreq[word]--;
    }
  }

  return "Yes";
};

var wordFreq = (sentence) => {
  let result = {};

  for (var i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  return result;
};
