# 26. Remove Duplicates from Sorted Array
# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

# Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

# Given nums = [0,0,1,1,1,2,2,3,3,4],

# Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

# It doesn't matter what values are set beyond the returned length.

nums = [0,0,1,1,1,2,2,3,3,4]

class Solution:
    def removeDuplicates(self, nums):

        l = len(nums)
        i = 0
        d = 0
        while i < l-d-1:
            if nums[i+1] == nums[i]:
                del nums[i+1]
                d += 1
            else:
                i += 1
        return len(nums)

    def removeDuplicates2(self, nums):
        if len(nums) == 0:
            return 0
        i = 0
        for j in range(len(nums)):
            if nums[j] != nums[i]:
                i+=1
                nums[i] = nums[j]
        
        print(nums)
        return i+1

j = Solution()

print(j.removeDuplicates2(nums))

