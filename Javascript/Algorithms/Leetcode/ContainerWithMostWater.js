// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxArea = 0;
    let i = 0, j = height.length - 1
    while (i < j) {
        //quickly see if the max area is better than it was before, working from both sides for faster results.
        maxArea = Math.max(maxArea, Math.min(height[i], height[j]) * (j-i))
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return maxArea
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
console.log(maxArea(height));

var height1 = [1, 1];
// Output: 1
console.log(maxArea(height1));
