# 78. Subsets
# https://leetcode.com/problems/subsets/

# Given a set of distinct integers, nums, return all possible subsets (the power set).

# Note: The solution set must not contain duplicate subsets.

# Example:

# Input: nums = [1,2,3]
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

test = [1, 2, 3]

### Solution 1: runtime better than 52.77%, memory better than 38.99%.
# This solution iteratively builds up longer subsets based on shorter subsets.
# Since the input contains distinct integers, we try to eliminate the chance of duplicates by sorting.
class Solution1:
    def subsets(self, nums):
        
        if not nums:
            return []

        nums.sort()
        result = [[]] # NOTE! The empty set is a subset of every set.
        for n in nums:
            print(n)
            result.append([n])
        
        def resultop(target_len):
            subsets_with_i_items = []
            for j in result:
                if j and len(j) == target_len-1:
                    for k in nums:
                        if k > max(j):
                            temp_item = j[:]
                            temp_item.append(k)
                            subsets_with_i_items.append(temp_item)
            result.extend(subsets_with_i_items)
        
        for i in range(2, len(nums)+1):
            resultop(i)

        return result

### Solution 2: runtime better than 95.93%; memory usage better than 62.93%.
# I learned this from LeetCode.
# The idea of this approach is similar to my own solution.
# It is a very clever usage of the mutable nature of lists.
# It is also interesting to notice `list + [j]` is equivalent to `list.extend([j])`.
class Solution2:
    def subsets(self, nums):
        output = [[]]

        for num in nums:
            print(num)
            output += [curr + [num] for curr in output]
        
        return output

testcase = Solution2()
print(testcase.subsets(test))
