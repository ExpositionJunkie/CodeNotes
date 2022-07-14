// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

 /**
 * @param {number[]} nums
 * @return {number}
 */
  var findPeakElement = function(nums) {
    let backupAns = 0
    for (let i = 0; i < nums.length; i++) {
      let j = i-1
      let k = i+1
      if (nums[j] !== undefined) {
       if (nums[k] !== undefined) {
         if (nums[i] > nums[j] && nums[i] > nums[k]) {
           return i
         }
       } else {
         if (nums[i] > nums[j]) {
           return i
         } 
       }
      }
    }
  return 0
 
};

var nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
console.log(findPeakElement(nums))

var nums1 = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
console.log(findPeakElement(nums1))

var nums2 = [3,2,1]
//Output: 0
console.log(findPeakElement(nums2))

var nums3 = [1,2]
//Output: 1
console.log(findPeakElement(nums3))