# # 347. Top K Frequent Elements
# https://leetcode.com/problems/top-k-frequent-elements/

# Given a non-empty array of integers, return the k most frequent elements.

# Example 1:

# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1,2]

# Example 2:

# Input: nums = [1], k = 1
# Output: [1]

# Note:

#     You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
#     Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
#     It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
#     You can return the answer in any order.



class Solution:

    ### This solution failed because it didn't account for negative integers.
    ### Didn't expect negative integers. With hindsight,
    # the problem didn't rule out negative integers though.
    def topKFrequent1(self, nums, k):
        ans = []
        count = [0] * (max(nums)+1)
        
        for i in nums:
            count[i] += 1
        
        while k:
            cur_max = count.index(max(count))
            ans.append(cur_max)
            count[cur_max] = -1
            k -= 1
        
        return ans
    
    ### Runtime: 332 ms, faster than 5.10% of Python3 online submissions for Top K Frequent Elements. // This indeed is super slow.
    ### Memory Usage: 18.2 MB, less than 87.18% of Python3 online submissions for Top K Frequent Elements.
    def topKFrequent2(self, nums, k):
        ans = []
        count = dict()

        for i in nums:
            if i in count.keys():
                count[i] += 1
            else:
                count[i] = 1
        
        while k:
            cur_max = list(count.values()).index(max(count.values()))
            key = list(count.keys())[cur_max]
            ans.append(key)
            count[key] = 0
            k -= 1
        
        return ans


###

test_nums = [1,1,1,2,2,3]
test_k = 2
test = Solution()
print(test.topKFrequent2(test_nums, test_k))