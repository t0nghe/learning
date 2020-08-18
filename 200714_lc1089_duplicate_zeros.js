// 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Example 1:

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:

// Input: [1,2,3]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,2,3]


var arr = [1,0,2,3,0,4,5,0]

var duplicateZeros = function(myArr) {
    let newArr = myArr.slice()
    
    let i = 0;
    let j = 0;

    while (j < myArr.length) {
        myArr[j] = newArr[i];
        console.log(myArr);
        console.log(newArr);
        if (newArr[i] == 0) {
            myArr[j+1] = 0;
            j+=2;
            i++;
        }
        j++;
        i++;    
    }

}

duplicateZeros(arr)
console.log(arr)

// The following is a naïve solution. 

// function solution(myArr) {
//     let newArr = []
//     for (let i = 0; i < myArr.length; i++) {
//         newArr.push(myArr[i])
//         if (myArr[i]==0) {
//             newArr.push(0)
//         }
//     }

//     for (let i = 0; i < myArr.length; i++) {
//         myArr[i] = newArr[i]
//     }
// }
