// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > target && nums.length/2 < nums[i]-1) {
        for (let k = nums.length-1; k <=0; i--){
          if (nums[k] === target) {
            return k
          }
        }
      }
      if (nums[i] === target) {
        return i
      }
    }
  return -1
};

var nums = [4,5,6,7,0,1,2]
var target = 0
//Output: 4
console.log(search(nums,target))

var nums1 = [4,5,6,7,0,1,2]
var target1 = 3
//Output: -1
console.log(search(nums1,target1))

var nums2 = [1]
var target2 = 0
//Output: -1
console.log(search(nums2,target2))