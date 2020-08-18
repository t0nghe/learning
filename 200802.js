var test = [5,1,2,3,4]

var heightChecker1 = function(heights) {
    let newHeights = [...heights].sort( (a,b)=> a-b );
    // console.log(newHeights)
    // console.log(heights)
    let cnt = 0;
    for (let i=0; i<heights.length; i++) {
        if (newHeights[i] != heights[i]) {
            cnt++
        }
    }
    return cnt
};

//----

var heightChecker2 = function(heights) {
    let newHeights = Array.from(heights);
    newHeights.sort( (a,b)=> a-b );
    let cnt = 0;
    for (let i=0; i<heights.length; i++) {
        if (newHeights[i] != heights[i]) {
            cnt++
        }
    }
    return cnt
};

// console.log(heightChecker2(test))

//--- 

var heightChecker3 = function(heights) {
    let newHeights = heights; // This doesn't work. Because these two will share the same memory address.
    newHeights.sort( (a,b)=> a-b );
    let cnt = 0;
    for (let i=0; i<heights.length; i++) {
        if (newHeights[i] != heights[i]) {
            cnt++
        }
    }
    return cnt
};

console.log(heightChecker3(test))

//---

var heightChecker4 = function(heights) {
    let newHeights = heights.slice(); // This doesn't work. Because these two will share the same memory address.
    newHeights.sort( (a,b)=> a-b );
    let cnt = 0;
    for (let i=0; i<heights.length; i++) {
        if (newHeights[i] != heights[i]) {
            cnt++
        }
    }
    return cnt
};

// console.log(heightChecker4(test))