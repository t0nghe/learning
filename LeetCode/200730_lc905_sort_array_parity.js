// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.


t1 = [3,1,2,4]
t2 = [1,3]

var sortArrayByParityNaïve = function(A) {
    let i = 0;
    let cnt = 0;
    while (i<A.length-cnt) {
        if (A[i]%2!=0) {
            A.push(A[i])
            A.splice(i, 1); // splice is quite intersting.
            cnt ++
        } else {
            i++
        }
    
    }
    return A;
};

var sortArrayByParityTwoPointers = function(A) {
    let i = 0; // front pointer for out of place odd numbers
    let j = A.length-1; // back pointer to find even numbers
    let temp = 0

    while (i < j) {
        if (A[i] % 2 == 1) {
            if (A[j] % 2 == 0) {
                temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            } else {
                while (A[j] % 2 == 1) {
                    j--
                }
            }
        } else {
            i++
        }
    }

    return A
};

console.log(sortArrayByParityNaïve(t1))
console.log(sortArrayByParityTwoPointers(t2))