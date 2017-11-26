/*  198. House Robber
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent houses
 * were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight without
 * alerting the police.
 */


const rob = (nums) => {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < nums.length; i++) {
    i % 2 === 0 ? oddSum += nums[i] : evenSum += nums[i];
  }

  return Math.max(oddSum, evenSum);

};
