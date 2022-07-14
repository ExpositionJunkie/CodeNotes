// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let returnArr = []
      for (let i = 0; i <nums.length; i++) {
        returnArr.push(nums[i]*nums[i])
      }
      returnArr.sort((a,b) => {return a - b})
    return returnArr
  };
  
  var nums = [-4,-1,0,3,10] //output [0,1,9,16,100]
  console.log(sortedSquares(nums))
  var nums1 = [-7,-3,2,3,11] //output [4,9,9,49,121]
  console.log(sortedSquares(nums1))