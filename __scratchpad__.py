class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> TreeNode:
        
        if nums:
            root_idx = int(len(nums)/2)
            node = TreeNode(nums[root_idx], self.sortedArrayToBST(nums[:root_idx]), self.sortedArrayToBST(nums[root_idx+1:]))
            return node
        else:
            return None