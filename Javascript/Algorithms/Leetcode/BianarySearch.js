/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 
var search = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i
      }
    }
    return -1
};

var nums1 = [-1,0,3,5,9,12] //expected 4
var target1 = 9
console.log(search(nums1,target1))
var nums2 = [-1,0,3,5,9,12] //expected -1
var target2 = 2
console.log(search(nums2,target2))
