// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5

// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4

// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// SOLUTION 3


// SOLUTION 2, Python, using a heap

// Faster than 72.53%, better memory than 41.97%.

// ```python
// import heapq

// class Solution:
//     def findKthLargest(self, nums: List[int], k: int) -> int:
//         heapq.heapify(nums)
//         return heapq.nlargest(k, nums)[-1]
// ```

// SOLUTION 1, my own, very naive.
 
// Faster than 42.95%, better memory than 92.23%.

var findKthLargest1 = function(nums, k) {
    nums.sort((a,b)=>b-a);
    return nums[k-1];
};

// Test
testNums = [3,2,3,1,2,4,5,5,6];
testK = 4;

console.log(findKthLargest(testNums, testK));