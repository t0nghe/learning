arr_in = [-7,-3,2,3,11]

class Solution1:
    def sortedSquares(self, A):
        B = [i**2 for i in A]
        return sorted(B)
    

class Solution2:
    def sortedSquares(self, A):
        for i in range(len(A)):
            A[i] = A[i] ** 2
        return sorted(A)

class Solution2:
    def sortedSquares(self, A):
        return [j**2 for j in sorted(abs(i) for i in A)]

j = Solution2()
print(j.sortedSquares(arr_in))