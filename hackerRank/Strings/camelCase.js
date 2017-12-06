/*
 * Alice wrote a sequence of words in CamelCase as a string of letters, , having the following properties:
 *
 * It is a concatenation of one or more words consisting of English letters.
 * All letters in the first word are lowercase.
 * For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
 * Given "s", print the number of words in "s" on a new line.
 *
 * Sample Input
 *
 * saveChangesInTheEditor
 * Sample Output
 *
 * 5
 * String  contains five words:
 * save, Changes, In, The, Editor
 * Thus, we print 5 on a new line.
*/

function camelCase (s) {
  return s.split(/[A-Z]/).length;
}
