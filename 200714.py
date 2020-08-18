arr_in = [1,0,2,3,0,4,5,0]

class Solution:
    def duplicateZeros(self, arr):
        new_arr = []
        
        for i in arr:
            new_arr.append(i)
            if i == 0:
                new_arr.append(i)

        # This works!
        for j in range(len(arr)):
            arr[j] = new_arr[j]
        
        # But this doesn't!
        #arr = new_arr[0:len(arr)]


ans = Solution()
ans.duplicateZeros(arr_in)


print(arr_in)