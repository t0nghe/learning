// 46. Permutations
// https://leetcode.com/problems/permutations/
// Given a collection of distinct integers, return all possible permutations.

var test = [1,2,3]

var permute = function(nums) {
    var ans = []
    dfs(nums, [], ans)
    return ans
};

var dfs = function(nums, path, ans) {
    if (nums.length == 0) {
        ans.push(path);
    }
    for (var i = 0; i< nums.length; i++) {
        dfs(nums.slice(0,i)+nums.slice(i+1), path+nums[i], ans)
    }
}

console.log(permute(test))