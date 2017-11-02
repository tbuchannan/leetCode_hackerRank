/* Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 *
 * (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 *
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 *
 * You may assume no duplicate exists in the array.
 */

const search = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end){
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    }

    if (arr[start] <= arr[middle]) {
      if (target >= arr[start] && target < arr[middle]){
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (target > arr[middle] && target <= arr[end]){
        start = middle + 1;
      } else {
        end = middle -1;
      }
    }
  }
  return -1;
 };
