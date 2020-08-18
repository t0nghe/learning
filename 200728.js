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