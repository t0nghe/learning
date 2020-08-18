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
