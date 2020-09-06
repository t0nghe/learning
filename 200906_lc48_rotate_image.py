# 48. Rotate Image
# https://leetcode.com/problems/rotate-image/

# You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

# You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

# Sample input:
matrix = [[1,2,3],
          [4,5,6],
          [7,8,9]]
# Sample output: [[7,4,1],
#                 [8,5,2],
#                 [9,6,3]]

#######################
### Solution 2 (Learned) - fater than 99.33%; better memory than 79.91%

class Solution2:
    def rotate(self, matrix):
        matrix.reverse()
        for i in range(0, len(matrix)):
            for j in range(0, i):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

#######################
### SOLUTION 1 (My own) - FASTER THAN 96.8%; BETTER MEMORY THAN 15.3%

class Solution1:
    def rotate(self, matrix):
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        elements = []
        for line in matrix:
            elements += line
        
        cnt = 0
        for j in range(n-1, -1, -1):
            for i in range(0, n):
                matrix[i][j] = elements[cnt]
                cnt += 1

### Test.

test = Solution2()
test.rotate(matrix)
print(matrix)