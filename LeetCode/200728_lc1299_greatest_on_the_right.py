# 1299. Replace Elements with Greatest Element on Right Side
# https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

# Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

# After doing so, return the array.

# Example 1:

# Input: arr = [17,18,5,4,6,1]
# Output: [18,6,6,6,1,-1]

###

test = [17,18,5,4,6,1]

class Solution:
    def replaceElements(self, arr):
        
        cur_max = -1
        for k in range(len(arr)-1, -1, -1):
            next_max = max(cur_max, arr[k])
            arr[k] = cur_max
            cur_max = next_max
            

ans = Solution()
ans.replaceElements(test)
print(test)
