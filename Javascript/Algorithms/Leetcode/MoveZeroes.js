
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let z = 0
    while (nums.indexOf(0) !== -1) {
      nums.splice(nums.indexOf(0), 1)
      z++
    }
    for (i = 0; i < z; i++) {
      nums.push(0)
    }
  };
  
  var nums1 = [0,1,0,3,12] //Output: [1,3,12,0,0]
  console.log(moveZeroes(nums1), nums1)
  var nums2 = [0] 
  //Output: [0]
  console.log(moveZeroes(nums2), nums2)