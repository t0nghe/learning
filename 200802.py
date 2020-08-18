class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        new_heights = sorted(heights)
        return sum( i!=j for i, j in zip(new_heights, heights) )