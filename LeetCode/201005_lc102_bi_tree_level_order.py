# 102. Binary Tree Level Order Traversal
# https://leetcode.com/problems/binary-tree-level-order-traversal/

# Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

# For example:
# Given binary tree [3,9,20,null,null,15,7],

#     3
#    / \
#   9  20
#     /  \
#    15   7

# return its level order traversal as:

# [
#   [3],
#   [9,20],
#   [15,7]
# ]

# Solution 1

from __binarytree__ import TreeNode

node15 = TreeNode(15)
node7 = TreeNode(7)
node20 = TreeNode(20, node15, node7)
node9 = TreeNode(9)
node3 = TreeNode(3, node9, node20)

# node3.show()

# Solution 1 -- Faster than 94.80%; better memory than 22.50%.
class Solution:
    def levelOrder(self, root):
        output = []
        this_level = [root]
        while root and this_level:
            output.append([node.val for node in this_level])
            next_level = []
            for node in this_level:
                # if node: # Since we are already iterating, `if node` is not necessary.
                if node.left:
                    next_level.append(node.left)
                if node.right:
                    next_level.append(node.right)
            this_level = next_level
        return output


testcase = Solution()
print(testcase.levelOrder(node3))