// 378. Kth Smallest Element in a Sorted Matrix
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

// Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// Example:

// matrix = [
//    [ 1,  5,  9],
//    [10, 11, 13],
//    [12, 13, 15]
// ],
// k = 8,

// return 13.

var matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
]

var k = 8


// Solution 1 -- faster than 61.54%; better memory than 5.22%.
// Needless to say this solution is naïve. 
var kthSmallest = function(matrix, k) {
    const flat = [];
    for (row of matrix) {
        flat.push(...row);
    }
    flat.sort( (a,b)=>a-b );
    return flat[k-1];
};

// Also, this one-liner:
// return [].concat(...matrix).sort( (a,b)=>a-b)[k-1]

console.log(kthSmallest(matrix, k))