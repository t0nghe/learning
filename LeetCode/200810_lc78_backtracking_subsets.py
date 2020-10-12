# 78. Subsets
# https://leetcode.com/problems/subsets/

# Given a set of distinct integers, nums, return all possible subsets (the power set).

# Note: The solution set must not contain duplicate subsets.

test = [1,2,3]

# Expected ans:
# Output:
# [
#   [3],
#   [1],
#   [2],
#   [1,2,3],
#   [1,3],
#   [2,3],
#   [1,2],
#   []
# ]

def subsets(nums):
    ans = []
    nums.sort()
    backtrack(ans, [], nums, 0)
    return ans

def backtrack(ans, templist, nums, start):
    ans.append(templist)
    for i in range(len(nums)):
        templist.append(nums[i])
        backtrack(ans, templist, nums, i+1)
        templist.pop()
    return ans

print(subsets(test))