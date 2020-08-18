# Given an array A of integers, return true if and only if it is a valid mountain array.

# Recall that A is a mountain array if and only if:

#     A.length >= 3
#     There exists some i with 0 < i < A.length - 1 such that:
#         A[0] < A[1] < ... A[i-1] < A[i]
#         A[i] > A[i+1] > ... > A[A.length - 1]

ta = [3,5,5]
tb = [0,3,2,1]
tc = [0,1,2,3,4,5,6,7,8,9]

class Solution:

    def validMountainArray(self, A) -> bool:
        
        if len(A) < 3:
            return False

        i = 0
        j = len(A)-1

        for i in range(len(A)-1):
            if A[i+1] <= A[i]:
                break
        
        for j in range(len(A)-1, 0, -1):
            if A[j-1] <= A[j]:
                break
        
        print(i)
        print(j)
        return i==j

milord = Solution()

print(milord.validMountainArray(tc))