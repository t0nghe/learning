//  Question 414
//  https://leetcode.com/problems/third-maximum-number/
 
//  Given a *non-empty* array of integers, return the *third* maximum unique number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

// Input: [1, 2]
// Output: 2

// Input: [2, 2, 3, 1]
// Output: 1

t1 = [2, 2, 3, 1, 4, 1] // should get 2
t2 = [1, 2, 2] // 2, if there's no third max, return max.

// Solution 1
var thirdMax = function(nums) {
    let numsSet = new Set(nums);

    if (numsSet.size < 3) { // Set.length doesn't exist.
        return Math.max(...nums);
    } else {
        let numsArray = Array.from(numsSet);
        // console.log(numsArray)
        numsArray.sort( (a,b)=> b-a);
        // console.log(numsArray)
        return numsArray[2];
    }
};

console.log(thirdMax(t1))
console.log(thirdMax(t2))