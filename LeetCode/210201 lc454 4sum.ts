// 454. 4Sum II

// Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

// To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.

function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
    let count = 0;
    let n = A.length;
    let pointerA = 0;
    let pointerB = 0;
    let pointerC = 0;
    let pointerD = 0;

    

    return count;
};


let A = [ 1, 2]
let B = [-2,-1]
let C = [-1, 2]
let D = [ 0, 2]

console.log(fourSumCount(A, B, C, D))