// 287. Find the Duplicate Number

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one duplicate number in nums, return this duplicate number.

// Follow-ups:

//     How can we prove that at least one duplicate number must exist in nums? 
//     Can you solve the problem without modifying the array nums?
//     Can you solve the problem using only constant, O(1) extra space?
//     Can you solve the problem with runtime complexity less than O(n2)?

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

var test = [5,3,1,3,4,2]

// SOLUTION 2 - Using an array (also my own)
// Faster than 11.80%; better memory than 16.97%.
// Suprisingly the runtime decrease significantly when the object is changed to an array.
var findDuplicate2 = function(nums) {
    let seen = [];
    for (let item of nums) {
        if (seen.includes(item)) {
            return item;
        } else {
            seen.push(item);
        }
    }
};

// SOLUTION 1 (My own)
// Faster than 96.86%; better memory than 14.08% JavaScript submissions.
var findDuplicate1 = function(nums) {
    let hash = new Object();
    for (let item of nums) {
        if (hash.hasOwnProperty(item)) {
            return item;
        } else {
            hash[item] = 1;
        }
    }
};

console.log(findDuplicate1(test))