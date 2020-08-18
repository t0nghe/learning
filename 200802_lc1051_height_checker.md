# 1051. Height Checker

Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students that must move in order for all students to be standing in non-decreasing order of height.

Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.

*This expression is quite confusing. Translation:* 
	* How many students are sitting at a position different from their sorted position? 

---

### Solution 1: Python runtime 97.51; memory: 89.75

* list comprehension helped a lot here.

```python
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        new_heights = sorted(heights)
        return sum( i!=j for i, j in zip(new_heights, heights) )
```

### Solution 2: JavaScript runtime 95.95; memory out of chart

```js
var heightChecker1 = function(heights) {
    let newHeights = [...heights].sort( (a,b)=> a-b );
    let cnt = 0;
    for (let i=0; i<heights.length; i++) {
        if (newHeights[i] != heights[i]) {
            cnt++
        }
    }
    return cnt
};
```