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


// Input sample is defined as below.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let node15 = TreeNode(15)
let node7 = TreeNode(7)
let node20 = TreeNode(20, node15, node7)
let node9 = TreeNode(9)
let node3 = TreeNode(3, node9, node20)

// 201008: Solution 2 -- STILL DIDN'T WORK!
// I wish I could be more familiar with JavaScript so I'd know
// if there's useful stuff like list comprehension in Python.
var levelOrder = function(root) {
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


//---------------

console.log(levelOrder(node3))