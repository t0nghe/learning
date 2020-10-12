// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Note:

//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.


test = [1,0,2,0,3,4]

var moveZeroes = function(nums) {
    let offset = 0 // This is also the count of zeroes
     // This is the pointer.

    for (let pointer = 0; pointer < nums.length; pointer ++) {
        if (nums[pointer] == 0) {
            offset ++;
        } else if (offset != 0) {
            nums[pointer-offset] = nums[pointer]
        }
    }

    while (offset) {
        nums[nums.length-offset] = 0;
        offset --
    }

    return nums
};

ans = moveZeroes(test)
console.log(ans)