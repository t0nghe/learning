# 108. Convert Sorted Array to Binary Search Tree
# https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

# Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

# For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

# Example:

# Given the sorted array: [-10,-3,0,5,9],

# One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

#       0
#      / \
#    -3   9
#    /   /
#  -10  5

# To make the TreeNode class work offline, I defined it locally.
from __binarytree__ import TreeNode

#######################
# Solution 1 - RUNTIME BETTER THAN 36.10%; MEMORY BETTER THAN 64.59% PYTHON3 SUBMISSIONS.

class Solution:
    def sortedArrayToBST(self, nums):
        
        if nums:
            root_idx = int(len(nums)/2)
            node = TreeNode(nums[root_idx], 
                self.sortedArrayToBST(nums[:root_idx]), 
                self.sortedArrayToBST(nums[root_idx+1:]))
            return node
        else:
            return None

test = [-10,-3,0,5,9]

testcase = Solution()
k = testcase.sortedArrayToBST(test)
k.show()