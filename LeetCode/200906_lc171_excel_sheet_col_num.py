# 171. Excel Sheet Column Number
# https://leetcode.com/problems/excel-sheet-column-number/
# Given a column title as appear in an Excel sheet, return its corresponding column number.

# For example:

#     A -> 1
#     B -> 2
#     C -> 3
#     ...
#     Z -> 26
#     AA -> 27
#     AB -> 28 
#     ...


############
# Solution 1 (my own) - faster than 63.94%; better memory than 66.93%

class Solution:
    def titleToNumber(self, s: str) -> int:
        sum = 0
        l = len(s)
        for i in range(0, l):
            sum += (ord(s[i]) - ord("A") + 1) * 26 ** (l-i-1)
        return sum

# Test

test = "AB"

testcase = Solution()
print(testcase.titleToNumber(test))