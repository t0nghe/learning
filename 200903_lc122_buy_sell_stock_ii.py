# 122. Best Time to Buy and Sell Stock II
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

# Say you have an array `prices` for which the i_th element is the price of a given stock on day i.

# Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

# Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

################
# Solution 2 -- FASTER THAN 99.80%; LESS MEMORY THAN 90.36%.
# I realized solution 1 was over complicated. On an upward streak, prices[2]-prices[0] equals prices[2]-prices[1]-prices[0].
# Therefore calculating day-by-day differences is enough to get the total profit. 

class Solution2:
    def maxProfit(self, prices):
        
        profit = 0

        for i in range(0, len(prices)-1):
            diff = prices[i+1]-prices[i]
            if diff > 0:
                profit += diff
        
        return profit

################
# SOLUTION 1: Worked on small test cases. Timed out on large test cases.
# Time complexity of this approach is exponential. 
# My thinking behind this solution is to first calculate the differences between each two elements;
# then compose legal trading strategies recursively;
# before finally finding the max value among the legal strategies.

class Solution1:
    def maxProfit(self, prices):
        
        pos_diffs = []

        for stride in range(1, len(prices)):
            
            for i in range(0, len(prices)):
                buy = i
                sell = i+stride
                if sell < len(prices):
                    profit = prices[sell]-prices[buy]
                    if profit > 0:
                        pos_diffs.append( (buy, sell, profit) )
        
        if not pos_diffs:
            return 0

        trading_strategies = []

        def build_strategy(current_span, remaining_diffs):
            
            if current_span[1] > max( k[0] for k in remaining_diffs ):
                trading_strategies.append(current_span)

            for i in range(0, len(remaining_diffs)):
                if remaining_diffs[i][0] >= current_span[1]:
                    new_span = (current_span[0], remaining_diffs[i][1], current_span[2]+remaining_diffs[i][2])
                    build_strategy(new_span, remaining_diffs[:i]+remaining_diffs[i+1:])

        build_strategy(pos_diffs[0], pos_diffs[1:])

        return max(k[2] for k in trading_strategies)

# Test below. 
test1 = [7,1,5,3,6,4]
test2 = [7,6,4,3,1] # Edge case where 0 is expected as return.
test3 = [7,1,5,3,6,4,7,1,4,9,11,1,3,10,11,3,3,3,4,5,3]

testcase = Solution2()
print(testcase.maxProfit(test3))