/*
 * Steve has a string, "s", consisting of  lowercase English alphabetic letters. In
 * one operation, he can delete any pair of adjacent letters with same value. For
 * example, string "aabcc" would become either "aab" or "bcc" after operation.
 *
 * Steve wants to reduce "s" as much as possible. To do this, he will repeat the above
 * operation as many times as it can be performed. Help Steve out by finding and
 * printing "s"'s non-reducible form!
 *
 * If the final string is empty, print Empty String; otherwise, print the final non-reducible string.
 *
 * superReducedString(aaabccddd) #=> 'abd'
 *
 * aaabccddd → abccddd
 * abccddd → abddd
 * abddd → abd
 *
 * superReducedString(baab) #=> 'Empty String'
 *
 * baab → bb
 * bb → Empty String
*/
function superReducedString(s){
  if (s.length <= 0){
    return "Empty String";
  }

  let stringArr = s.split("");
  for(let i = 0, l = stringArr.length; i < l; i++){
    let char1 = stringArr[i];
    let char2 = stringArr[i + 1];
    if (char1 === char2){
      [stringArr[i], stringArr[i + 1]] = [null, null];
    }
  }

  let result = stringArr.join("");
  return result.length < s.length ? superReducedString(result) : result;
}
