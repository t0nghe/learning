# 62. Unique Paths
# https://leetcode.com/problems/unique-paths/
# 
# # A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

# The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

# How many possible unique paths are there?

#----------------

# Solution 3
# Learned from here: https://leetcode.com/problems/unique-paths/discuss/943191/Simple-Math-with-O(1)

from math import factorial

class Solution3:

    def uniquePaths(self, m, n):
        return int(factorial(m+n-2) / (factorial(m-1) * factorial(n-1)))

# Solution 2
# Runtime: 28 ms, faster than 81.18% of Python3 online submissions for Unique Paths.
# Memory Usage: 14.3 MB, less than 5.02% of Python3 online submissions for Unique Paths.

class Solution2:
    
    chart = {(1,1): 1}

    def uniquePaths(self, m: int, n: int) -> int:
        
        for k in range(1,m+1):
            for l in range(1,n+1):
                if (k,l) not in self.chart.keys():
                    if k > 1:
                        a = self.chart[(k-1,l)]
                    else:
                        a = 0
                    if l>1:
                        b = self.chart[(k,l-1)]
                    else:
                        b = 0
                    self.chart[(k,l)] = a + b
        
        return self.chart[(m,n)]
        


# Solution 1 -- Timed out.
# Worked when m = 3 and n = 7.
# Timed out when m = 23 and n = 12.
# Need to fined a way to memoize. 
class Solution1:
    def uniquePaths(self, m: int, n: int) -> int:
        if m == 1 or n == 1:
            return 1
        else:
            return self.uniquePaths(m-1, n) + self.uniquePaths(m, n-1)

# test case:

m = 23
n = 12

k = Solution3()
print(k.uniquePaths(m, n))
# Output: 28