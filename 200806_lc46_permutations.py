# 46. Permutations
# Given a collection of distinct integers, return all possible permutations.
# https://leetcode.com/problems/permutations/


test = [1,2,3]


# An earlier solution:
def go_deeper(to_perm, already_have):
    
    ans = []
    if not to_perm:
        return [already_have]
    else:
        for i in range(len(to_perm)):
            this_char = to_perm[i]
            new_to_perm = to_perm[0:i] + to_perm[i+1:]
            things = go_deeper(new_to_perm, already_have+[this_char])
            for th in things:
                ans.append(th)

    return ans

# print(go_deeper(test, [])) 

#---

def permute(nums):
    res = [] # result
    lev, to_visit, path = 0, nums, []
    #lev: level of search tree;
    #to_visit: remaining elements
    #path: node content, `node` is a search tree term

    N = len(nums) # <---@

    def dfs(lev, to_visit, path):
        if lev == N: #Upon reaching the depth of orig list
            res.append(path)
            return
        for i in range(len(to_visit)):
            dfs(lev+1,
                to_visit[:i]+to_visit[i+1:],
                path+[to_visit[i]])
    
    dfs(lev, to_visit, path)
    return(res)

print(permute(test))