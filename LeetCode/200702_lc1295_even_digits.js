// 1295. Find Numbers with Even Number of Digits
// Given an array nums of integers, return how many of them contain an even number of digits. 
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var test = [12,345,2,6,7896]

var countDigits = function (num) {
    let counter = 0; 
    while (num >= 1) {
        num /= 10;
        counter += 1;
    }
    return counter % 2 == 0;
}

var findNumbers = function(nums) {
    let counter = 0;
    for (let n of nums) {
        if (countDigits(n)) {
            counter ++;
        }
    }
    return counter;
}

console.log(findNumbers(test))