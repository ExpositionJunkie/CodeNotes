// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    function firstIndex(numArr, targetNum){
      for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === targetNum) {
          return i
        }
      }
      return -1
    }
    
  function lastIndex(numArr, targetNum) {
    for (let k = numArr.length-1; k > -1; k--) {
      if (numArr[k] === targetNum) {
        return k
      }
    }
    return -1
  }
  return [firstIndex(nums, target), lastIndex(nums, target)]
};

//This one does not recognize findLastIndex but this way seems faster

var nums = [5,7,7,8,8,10]
var target = 8
//Output: [3,4]
console.log(searchRange(nums, target))

var nums1 = [5,7,7,8,8,10]
var target1 = 6
//Output: [-1,-1]
console.log(searchRange(nums1, target1))

var nums2 = []
var target2 = 0
//Output: [-1,-1]
console.log(searchRange(nums2, target2))

var nums3 = [5,7,7,8,8,8,8,10]
var target3 = 8
//Output: [3,4]
console.log(searchRange(nums3, target3))