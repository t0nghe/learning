// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

//     i != j
//     0 <= i, j < arr.length
//     arr[i] == 2 * arr[j]

/**
@param {number[]} arr
@return {boolean}
 **/

arr_t = [7,1,14,11]
arr_f = [3,1,7,11]

var checkIfExist = function(arr) {
    
    if (arr.length == 0 || arr.length == 1) {
        return false;
    } else {
        
        for (let i = 0; i < arr.length -1; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[i] == arr[j]*2 || arr[j] == arr[i]*2) {
                    return true;
                }
            }
        }

        return false;
    
    }

};

// console.log(checkIfExist(arr_t))
// console.log(checkIfExist(arr_f))

if ([0]) {
    console.log('[0] is true')
} else {
    console.log('[0] is false')
}