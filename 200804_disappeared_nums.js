var t1 = [4,3,2,7,7,2,3,1] // [5,6,8]
var t2 = [] // []
var t3 = [2,2] // [1]

var findDisappearedNumbers = function(nums) {
    var ans = []

    if (nums.length) {
        nums.push(0, nums.length+1)
        nums.sort( (a,b) => a-b);

        for (var i=0; i<nums.length; i++) {
            if (nums[i+1]-nums[i]>1) {
                for (var j=nums[i]+1; j<nums[i+1]; j++) {
                    ans.push(j);
                }
            }
        }
    }
    return ans
};

console.log(findDisappearedNumbers(t1))
console.log(findDisappearedNumbers(t2))
console.log(findDisappearedNumbers(t3))
