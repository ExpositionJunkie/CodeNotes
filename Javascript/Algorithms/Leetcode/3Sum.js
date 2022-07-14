// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// C++ different code language but is a great explanation fo the mechanism here: https://www.youtube.com/watch?v=fj1g_-BwCMk
// htps://leetcode.com/problems/3sum/discuss/295342/JS-solution - Shamefully copied

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */

  var threeSum = function(nums) {
    let res = []
    nums.sort((a,b) => a - b) //sort to make faster
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) //helps to keep time down not shown in the C++
            continue
        let target = -nums[i]
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[left], -target, nums[right]])
                while (nums[left] === nums[left + 1])
                    left++ // like the tortoise and the hare, jump forward 2x
                left++
                while (nums[right] === nums[right - 1])
                    right-- // like the tortoise and the hare, jump forward 2x
                right--
            }
            else if (nums[left] + nums[right] > target)
                right--
            else
                left++
        }
        
    }
    return res
};

var nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[1] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
console.log("nums", threeSum(nums))

var nums1 = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
console.log("nums1", threeSum(nums1))

var nums2 = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
console.log("nums2",threeSum(nums2))