// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
      let l = i+1
      if (matrix[l]) {
        if (matrix[i][0] <= target && matrix[l][0] >= target) {
          for(let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] === target) {
              return true
            }
          }
        }
      } else { 
       for(let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
              return true
            }
          }
      } 
    }
  return false
};

var matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
var target = 3
//Output: true

console.log(searchMatrix(matrix, target))

var matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
var target1 = 13
//Output: false

console.log(searchMatrix(matrix1, target1))
