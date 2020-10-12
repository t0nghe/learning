### 238. Product of Array Except Self
# https://leetcode.com/problems/product-of-array-except-self/

# Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

# Example:

# Input:  [1,2,3,4]
# Output: [24,12,8,6]

# Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

# Note: Please solve it without division and in O(n).

###########################################
# SOLUTION 3 -- FASTER THAN 92.57%; MORE MEMORY-EFFICIENT THAN 48.41% SUBMISSIONS
# By building a list with 2 rounds of multiplication, we can manage to give a solution that has O(2n) time complexity.

class Solution3:
    def productExceptSelf(self, nums):
        ans = [1]
        prod_before_i = 1
        prod_after_j = 1

        for i in range(1, len(nums)):
            prod_before_i *= nums[i-1]
            ans.append(prod_before_i)
        
        for j in range(len(nums)-1, -1, -1):
            ans[j] *= prod_after_j
            prod_after_j *= nums[j]
        
        return ans


###########################################
# SOLUTION 2 -- ERROR: DIVISION BY ZERO
# Failed on test cases [0,0] and [1,0].
# (Besides, the instruction said not to use division. I just wanted to try if this approach works.)

class Solution2:
    def productExceptSelf(self, nums):
        
        ans = []

        prod = 1
        for i in nums:
            prod *= i
        
        for j in nums:
            ans.append(int(prod/j))
            
        return ans


###########################################
# SOLUTION 1 -- EXCEEDED TIME LIMIT
# This solution worked on the very short test case [1, 2, 3, 4].
# The test case at which it failed was a list of 50,000 ones and neg ones.

class Solution1:
    def productExceptSelf(self, nums):
        
        ans = []
        
        def productOfList(myList):
            prod = 1
            for i in myList:
                prod *= i
            return prod
            
        for i in range(len(nums)):
            ans.append(productOfList(nums[:i]+nums[i+1:]))
        
        return ans

test = [1,2,3,4]
solution1 = Solution3()
print(solution1.productExceptSelf(test))