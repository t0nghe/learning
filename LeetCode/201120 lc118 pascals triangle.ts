// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// SOLUTION 1
// Runtime: 112 ms, faster than 5.88% of TypeScript online submissions for Pascal's Triangle.
// Memory Usage: 39.4 MB, less than 30.88% of TypeScript online submissions for Pascal's Triangle.
// Thinking: Take the difference between a = [1, 3, 3, 1] and b = [1, 4, 6, 4, 1]:
// the center 3 items in `b` equals a_left (1, 3, 3) added up with a_right (3, 3, 1).
// The flanking items in `b` are respectively pushed and unshifted. 

function generate(numRows: number): number[][] {
    let result: number[][];
    if (numRows===0) {
        return result;
    } else {
        result = [[1]];
    }
    for (let i = 1; i < numRows; i++) {
        let lastRow = result[result.length-1];
        let lastRowA = lastRow.slice(0, lastRow.length-1);
        let lastRowB = lastRow.slice(1, lastRow.length);
        let newRow = lastRowA.map( (item, idx) => item+lastRowB[idx]);
        newRow.unshift(1);
        newRow.push(1);
        result.push(newRow);
    }
    return result;
};

console.log(generate(5))

// Result:
// [ [ 1 ],
//   [ 1, 1 ],
//   [ 1, 2, 1 ],
//   [ 1, 3, 3, 1 ],
//   [ 1, 4, 6, 4, 1 ] ]