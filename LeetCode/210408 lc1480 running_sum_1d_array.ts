// 1480. Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// -----------------

// SOLUTION 2.
// Run time: 88.79%
// Memory: 87.53%

function runningSum2(nums: number[]): number[] {    
    for (let i=1;i<nums.length;i++) {
        nums[i] += nums[i-1];
    }
    return nums;
};


// SOLUTION 1. 
// Run time better than 73.78%. Memory better than 96.83%.
// An earlier version used indexing to iterate through the array. It used a lot more memory.

function runningSum1(nums: number[]): number[] {
    const output:number[] = [];
    let sum = 0;
    for (let k of nums) {
        sum+=k;
        output.push(sum)
    }
    return output
};

// Test

const nums = [3,1,2,10,1]
console.log(runningSum2(nums))