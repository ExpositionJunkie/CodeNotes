// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    if (k > nums.length) {
     k = k % nums.length   
    }
    nums.unshift(...nums.splice(nums.length-k))
};

var nums = [1,2,3,4,5,6,7]
var k = 3 //Output: [5,6,7,1,2,3,4]
console.log(rotate(nums, k), nums)

var nums2 = [-1,-100,3,99];
var k2 = 2; //[3,99,-1,-100]
console.log(rotate(nums2, k2), nums2)