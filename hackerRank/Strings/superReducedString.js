/* Steve has a string,s , consisting of  lowercase English alphabetic letters. In
one operation, he can delete any pair of adjacent letters with same value. For
example, string "aabcc" would become either "aab" or "bcc" after operation.

Steve wants to reduce  as much as possible. To do this, he will repeat the above
operation as many times as it can be performed. Help Steve out by finding and
printing 's non-reducible form!

Note: If the final string is empty, print Empty String .

Input Format:
A single string, 's'.

Constraints:
1 <= n <= 100

Output Format:
If the final string is empty, print Empty String; otherwise, print the final non-reducible string.

Sample Input 0
aaabccddd

Sample Output 0
abd


Sample Case 0
Steve can perform the following sequence of operations to get the final string:

aaabccddd → abccddd
abccddd → abddd
abddd → abd
Thus, we print abd.

Sample Input 1
baab

Sample Output 1
Empty String


Explanation 1
Steve can perform the following sequence of operations to get the final string:

baab → bb
bb → Empty String
Thus, we print Empty String.

Sample Input 2
aa

Sample Output 2
Empty String

Explanation 2
Steve can perform the following sequence of operations to get the final string:

aa → Empty String
Thus, we print Empty String.
*/


function super_reduced_string(s){
    // Complete this function
    let stringArr = s.split("");
    let deletion = true;

    while (deletion){
      deletion = false;
      for(let i = 0, l = stringArr.length; i < l; i++){
        let char1 = stringArr[i];
        let char2 = stringArr[i + 1];
        if (char1 === char2){
          [stringArr[i], stringArr[i + 1]] = [null, null];
          deletion = true;
        }
      }
      stringArr = stringArr.join("").split("");
    }

    return stringArr.join("");
}
