# 88. Merge Sorted Array
# Easy
# https://leetcode.com/problems/merge-sorted-array/

# Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

# Note:

#     The number of elements initialized in nums1 and nums2 are m and n respectively.
#     You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

# Example:

# Input:
# nums1 = [1,2,3,0,0,0], m = 3
# nums2 = [2,5,6],       n = 3

# Output: [1,2,2,3,5,6]


nums1 = [1,2,3,0,0,0]
m = 3

nums2 = [2,5,6]
n = 3

# [0]
# 0
# [1]
# 1

class Solution1:
    ## Something is wrong here...
    def merge(self, nums1, m, nums2, n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        
        # min_val = nums1[0]
        added = 0
        for k in nums2:
            i = 0
            while i < m + added and nums1[i] < k:
                i += 1
            nums1.insert(i, k)
            added += 1
            nums1.pop()


testcase = Solution1()
print(nums1)
print(nums2)
testcase.merge(nums1, m, nums2, n)
print(nums1)