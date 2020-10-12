# This script defineds the structure of a binary tree.
# By calling show() method at the root node, it will iteratively print out each node and its child nodes.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def show(self):
        v = self.val 
        l = self.left.val if self.left else "_"
        r = self.right.val if self.right else "_"
        print("{} -> {} {}".format(v, l, r))
        
        if self.left:
            self.left.show()
        
        if self.right:
            self.right.show()