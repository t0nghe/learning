#  1089. Duplicate Zeros
#  https://leetcode.com/problems/duplicate-zeros/

#  Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

#  Note that elements beyond the length of the original array are not written.

#  Do the above modifications to the input array in place, do not return anything from your function.

#  Example 1:

#  Input: [1,0,2,3,0,4,5,0]
#  Output: null
#  Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

#  Example 2:

#  Input: [1,2,3]
#  Output: null
#  Explanation: After calling your function, the input array is modified to: [1,2,3]

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