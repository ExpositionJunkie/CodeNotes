// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//uses pointers to avoid really nasty last example featuring about a billion -1s and two 1s at the end.
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length-1;
    while(left<right) {
      if(numbers[left] + numbers[right] === target) {
        return [left+1, right+1]
      } else if(numbers[left] + numbers[right] < target ){
        left++
      } else {
        right--
      }
    } 
  };
  
  var numbers = [2,7,11,15]
  var target = 9 //Output: [1,2]
  console.log(twoSum(numbers, target))
  
  var numbers1 = [2,3,4]
  var target1 = 6 //Output: [1,3]
  console.log(twoSum(numbers1, target1))
  
  var numbers2 = [-1,0];
  var target2 = -1; //Output: [1,2]
  console.log(twoSum(numbers2, target2))
  
  var numbers3 = [0,0,3,4]
  var target3 = 0 //Output: [1,2]
  console.log(twoSum(numbers3, target3))
  
  var numbers4 = [-3,3,4,90]
  var target4 = 0 //Output: [1,2]
  console.log(twoSum(numbers4, target4))
  
  var numbers5 = [5,25,75]
  var target5 = 100 //[2,3]
  console.log(twoSum(numbers5, target5))