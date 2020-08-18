# 22. Generate Parentheses
# https://leetcode.com/problems/generate-parentheses/
#  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# For example, given n = 3, a solution set is:

# [
#   "((()))",
#   "(()())",
#   "(())()",
#   "()(())",
#   "()()()"
# ]

def generateParenthesis(n):
    result = []
    stack = [("(", 1, 0)]
    while stack:
        string, left, right = stack.pop()
        if left < right or left > n or right >n:
            continue
        elif left == right == n:
            result.append(string)
        stack.append( (string+"(", left+1, right) )
        stack.append( (string+")", left, right+1) )
    return result

# Test:
print(generateParenthesis(3))
# Result:
# ['()()()', '()(())', '(())()', '(()())', '((()))']