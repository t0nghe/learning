# 49. Group Anagrams
# https://leetcode.com/problems/group-anagrams/

# Given an array of strings strs, group the anagrams together. You can return the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example:

# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


### Solution 3 -- prime multiplication. (Learned from discussions.)
# Faster than 94.45%; more memory efficient than 87.84%.
# There are two more interesting approaches, one is to categorize by count; the other is to prime number multiplication. 
# Following is me replicating the `prime multiplication` approached learned from online discussions. 

class Solution3:

    def groupAnagrams(self, strs):

        letter2prime = {'a': 2, 'b': 3, 'c': 5, 'd': 7, 'e': 11, 'f': 13,'g': 17,'h': 19,'i': 23,'j': 29,'k': 31,'l': 37,'m': 41,'n': 43,'o': 47,'p': 53,'q': 59,'r': 61,'s': 67, 't': 71,'u': 73,'v': 79,'w': 83,'x': 89,'y': 97,'z': 101}

        prod2words = defaultdict(list)

        for word in strs:
            prod = 1
            for letter in word:
                prod *= letter2prime[letter]
            prod2words[prod].append(word)

        return list(prod2words.values())

##############
# Solution 2 -- Same approach as Solution 1. But this time with defaultdict.
# FASTER THAN 98.21%; MORE MEMORY-EFFICIENT THAN 80.60%.
##############

from collections import defaultdict

class Solution2:
    
    def groupAnagrams(self, strs):
        anaGroups = defaultdict(list)
        for word in strs:
            w_sorted = ''.join(sorted(word))
            anaGroups[w_sorted].append(word)
        
        return list(anaGroups.values())

##############
# Solution 1
# RUNTIME BETTER THAN 59.86%;
# MEMORY USAGE BETTER THAN 92.58% PYTHON3 SUBMISSIONS
##############

class Solution1:
    def groupAnagrams(self, strs):
        anaGroups = dict()
        anaGroups[''.join(sorted(strs[0]))] = [strs[0]]
        for word in strs[1:]:
            w_sorted = ''.join(sorted(word))
            if w_sorted in anaGroups.keys():
                anaGroups[w_sorted].append(word)
            else:
                anaGroups[w_sorted] = [word]
        
        return list(anaGroups.values())
        

### Note: 
# First version of this solution attempted to use sets of letters as dictionary keys. And it caused an error.

### Test
strs = ["eat","tea","tan","ate","nat","bat"]
testcase = Solution3()
print(testcase.groupAnagrams(strs))