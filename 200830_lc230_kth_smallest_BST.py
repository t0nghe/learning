# 230. Kth Smallest Element in a BST
# https://leetcode.com/problems/kth-smallest-element-in-a-bst/

# Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

# Example:
# Input: root = [3,1,4,null,2], k = 1
#    3
#   / \
#  1   4
#   \
#    2
# Output: 1

####################################
# SOLUTION 1
# FASTER THAN 55.53%;
# MORE MEMORY-EFFICIENT THAN 43.23% PYTHON3 SUBMISSIONS
####################################

# This silution uses the `getArray()` function to recursively traverse the tree and put all nodes in an array in correct order. Then we return the [k-1]th item in the array.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        
        def get_array(node):
            
            if node.left:
                left = get_array(node.left)
            else:
                left = []
                
            if node.right:
                right = get_array(node.right)
            else:
                right = []
            
            return left+[node.val]+right
        
        array = get_array(root)
        return array[k-1]