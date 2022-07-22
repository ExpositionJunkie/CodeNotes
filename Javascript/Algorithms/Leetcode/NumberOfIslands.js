// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


// I believe this would be a breadth first search, similar to the paint fill algo

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let counter = 0;
    if (grid) {
      const height = grid.length;
      const width = grid[0].length; 
      const exists = (i, j) => (i >= 0 && i < height && j >= 0 && j < width);
      const visit = (i, j) => grid[i][j] = '0';
  
      const check  = (i, j, q) => {
        if (exists(i,j)) {
          if (grid[i][j] == '1') {
            visit (i, j)
            q.push({i,j})
          }
        }
      }
  
      for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
          if (grid[i][j] == '1') {
            counter++;
            visit(i,j);
            const q = [{i,j}];
            while (q.length > 0) { //checking neighbors
              const c = q.shift()
              check(c.i-1, c.j, q); //neighbor up
              check(c.i+1, c.j, q); //neighbor down
              check(c.i, c.j-1, q); //neighbor left
              check(c.i, c.j+1, q); //neighbor right
            }
          }
        }
      }
    }
  
      return counter
  };
   
  
  // Example 1:
  
  var grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  // Output: 1
  console.log(numIslands(grid))
  
  // Example 2:
  
  var grid1 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  // Output: 3
  console.log(numIslands(grid1))