// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let minLength = Infinity
    let sum = 0
    let prevIndex = 0;

    if (nums) {
      for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        
        while (sum >= target) {          
          minLength = Math.min(minLength, i - prevIndex + 1);
          sum -= nums[prevIndex];
          prevIndex++
        } 
      }
    }

    return minLength === Infinity ? 0: minLength;
    
};
 

// Example 1:

var target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
console.log(minSubArrayLen(target,nums))

// Example 2:

var target1 = 4, nums1 = [1,4,4]
// Output: 1
console.log(minSubArrayLen(target1,nums1))

// Example 3:

var target2 = 11, nums2 = [1,1,1,1,1,1,1,1]
// Output: 0
console.log(minSubArrayLen(target2,nums2))

var target3 = 11, nums3 = [1,2,3,4,5]
// Output: 3
console.log(minSubArrayLen(target3,nums3))
 