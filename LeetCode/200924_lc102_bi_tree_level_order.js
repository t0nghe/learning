// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its level order traversal as:

// [
//   [3],
//   [9,20],
//   [15,7]
// ]


// 201012: Solution 3. Faster than 53.86%; better memory than 7.44%.
// I learned this colution from here:
// https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/238676/JavaScript-BFS-solution

var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const stack = [];
    stack.push(root);
    const result = [];
    while (stack.length > 0) {
        const size = stack.length; // <-- Surprised to learn you can use const to declare it.
        // It seems the const is new in each iteration.
        const layer = [];
        for (let i = 0; i < size; i++) { // <-- Use `size` instead of `stack.length` because length of stack changes in the for loop.
            const node = stack.shift();
            layer.push(node.val);
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
        }
        result.push(layer);
    }
    return result;
};


// 201008: Solution 2 -- STILL DIDN'T WORK!
// I wish I could be more familiar with JavaScript so I'd know
// if there's useful stuff like list comprehension in Python.
var levelOrder2 = function(root) {
    var output = [];
    var thisLevel = [root];
    while (root & thisLevel) {
        var thisNodes = [];
        var nextLevel = [];
        for (node of thisLevel) {
            thisNodes.push(node.val);
            if (node.left) {
                nextLevel.push(node.left);
            }
            if (node.right) {
                nextLevel.push(node.right);
            }
        }
        output.push(thisNodes);
        thisLevel = nextLevel;
    }
    return output;
}


// Solution 1 -- EXCEEDED TIME LIMIT
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder1 = function(root) {
    let levels = [];
    let nodesThisLevel = [root];
    levels.push(nodesThisLevel)
    let finished = false
    console.log(levels)

    while (!finished) {
        let nodesNextLevel = [];
        while (nodesThisLevel) {
            let leftmostNode = nodesThisLevel.shift();
            
            if (leftmostNode.left) {
                nodesNextLevel.push(leftmostNode.left);
            }
            if (leftmostNode.right) {
                nodesNextLevel.push(leftmostNode.right);
            }
        
        levels.push(nodesThisLevel)
        if (nodesNextLevel) {
            nodesThisLevel = nodesNextLevel
        } else {
            finished = true;
        }
    }
}

return levels;

}

