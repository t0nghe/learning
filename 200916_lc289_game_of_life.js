// 289. Game of Life

// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

//     1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
//     2. Any live cell with two or three live neighbors lives on to the next generation.
//     3. Any live cell with more than three live neighbors dies, as if by over-population.
//     4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

// Example:

// Input: 
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output: 
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]

// SOLUTION 2.
// Fater than 54.14%; better memory than 33.34%
// One possible cause of problem in Solution 1 is probably referencing the variable `board` without passing it into the liveNeighbors function.
// This solution is also better than the previous by doing away with a new array for `nextStep` and by using a array that includes offsets for eight neighbors, thus avoiding some calculation.

var gameOfLife = function(board) {
    // Go over the board and mark each element as:
    // -1 if it is dead and will become alive;
    // 0 - dead, remains dead;
    // 1 - alive, remains alive; and
    // 2 - alive, becomes dead.
    // Using these numbers enables us to count neighbors simply by a greater than evaluation.

    for (let x=0; x < board.length; x++) {
        for (let y=0; y < board[x].length; y++) {
            // console.log(x, y);
            let neighbors = countNeighbors(board, x, y)
            if (board[x][y] == 1 && (neighbors < 2 || neighbors > 3)) board[x][y] = 2;
            else if (board[x][y] == 0 && neighbors == 3) board[x][y] = -1;
        }
    }

    for (let x=0; x < board.length; x++) {
        for (let y=0; y < board[x].length; y++) {
            if (board[x][y] == -1) board[x][y] = 1;
            else if (board[x][y] == 2) board[x][y] = 0;
        }
    }
    return board;
}

const countNeighbors = function(brd, x, y) {
    let count = 0;
    let xmax = brd.length;
    let ymax = brd[0].length;
    for (let pair of [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]]) {
        let i = x+pair[0];
        let j = y+pair[1];
        // console.log(i, j)
        if (0<=i && i <xmax && 0<=j && j <ymax) {
            if (brd[i][j] > 0) count++;
        }
    }
    return count;
}

// SOLUTION 1.
// A version of this solution worked on my computer.
// But it Didn't work on LeetCode.
// Will look into it later.

var gameOfLife1 = function(board) {
    let xmax = board.length;
    let ymax = board[0].length;

    let nextStep = []
    for (let i = 0; i < xmax; i++) {
        nextStep[i] = Array.from(board[i])
    }

    const liveNeighbors = function(x, y, xmax, ymax) {
        let cnt = 0;
        for (let x0 of [x-1, x, x+1]) {
            for (let y0 of [y-1, y, y+1]) {
                cnt += board[x0][y0];
            }
        }
        return cnt - board[x][y];
    }

    for (let x1=0; x1<xmax; x1++) {
        for (let y1=0; y1<ymax; y1++) {
            if (board[x1][y1] == 1) {
                switch (liveNeighbors(x1, y1, xmax, ymax)) {
                    case 0:
                    case 1:
                        nextStep[x1][y1] = 0;
                        break;
                    case 2:
                    case 3:
                        nextStep[x1][y1] = 1;
                        break;
                    default:
                        nextStep[x1][y1] = 0;
                }
            } else {
                if (liveNeighbors(x1, y1, xmax, ymax) == 3) {
                    nextStep[x1][y1] = 1;
                }
            }
        }
    }
    
    return nextStep;
};

// TEST

test = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]

console.log(gameOfLife(test))