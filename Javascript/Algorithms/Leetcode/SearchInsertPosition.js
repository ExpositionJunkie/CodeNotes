// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for (let i = 0; i <= nums.length ; i++) {
      if (nums[i] === target) {
        return i
      } else if (nums[i] > target) {
        return i
      }
    }
    return nums.length
};

var nums = [1,3,5,6]
var target = 5
console.log(searchInsert(nums, target)) //Output: 2

var nums2 = [1,3,5,6]
var target2 = 2
console.log(searchInsert(nums2, target2)) //Output: 1

var nums3 = [1,3,5,6]
var target3 = 7
console.log(searchInsert(nums3, target3)) //Output: 4