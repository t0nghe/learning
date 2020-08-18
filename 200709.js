var arr_in = [-7,5,-3,2,-10,3,11];

// var sortedSquares = function(A) {
//     for (let i = 0; i < A.length; i++) {
//         A[i] = A[i] ** 2;
//     }
//     A.sort(function(a, b){return a-b})
//     return A
// };

// console.log(sortedSquares(arr_in))

console.log(arr_in)
arr_in.sort(
    function(a, b){
        return b-a
    })
console.log(arr_in)