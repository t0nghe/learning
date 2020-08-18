t1 = [3,1,2,4]
t2 = [1,3]

var sortArrayByParityNaïve = function(A) {
    let i = 0;
    let cnt = 0;
    while (i<A.length-cnt) {
        if (A[i]%2!=0) {
            A.push(A[i])
            A.splice(i, 1);
            cnt ++
        } else {
            i++
        }
    
    }
    return A;
};

var sortArrayByParityTwoPointers = function(A) {
    let i = 0; // front pointer for out of place odd numbers
    let j = A.length-1; // back pointer to find even numbers
    let temp = 0

    while (i < j) {
        if (A[i] % 2 == 1) {
            if (A[j] % 2 == 0) {
                temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            } else {
                while (A[j] % 2 == 1) {
                    j--
                }
            }
        } else {
            i++
        }
    }

    return A
};

console.log(sortArrayByParityTwoPointers(t1))
console.log(sortArrayByParityTwoPointers(t2))