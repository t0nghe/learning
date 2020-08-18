var arr = [1,0,2,3,0,4,5,0]

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