/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var myNums = [0,1,2,2,3,0,4,2];
var myVal = 2

var removeElement1 = function(nums, val) {
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            let j = i;
            while (j < nums.length) {
                nums[j] = nums[j+1]
                j++
            }
            nums.pop()
            // console.log(nums)
            i--
        }
    }
};

var removeElement2 = function(nums, val) {
    let newNums = nums.slice();
    let count = 0;
    
    let i = 0 // pointer for position in newNums
    let j = 0 // pointer for position in nums

    while (i < newNums.length) {
        if (newNums[i] == val) {
            i++
            count++
        } else {
            nums[j] = newNums[i];
            i++;
            j++;
        }
    }
    
    for (let k = 0; k < count; k++) {
        nums.pop();
    }

    console.log(nums)
}

removeElement2(myNums, myVal)