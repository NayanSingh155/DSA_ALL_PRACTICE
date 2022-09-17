// Description

// You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.


// Input
// Input Format :

// First line contains number of integers N present in the array.

// Second line contains  N  space separated integers.

// Constraints :

// 1 <= N <= 100


// Output
// Output "Yes" or "No" based on condition mentioned above.


// Sample Input 1 

// 5
// 3 7 0 9 8
// Sample Output 1

// No
// Hint
// We print No as 42 is not present in array.
function equalTo42(size,arr) {
    //     for(let i=0;i<arr.length;i++){
    //         if(arr[i]==42){
    //             console.log("Yes")
    //             break;
    //         }else{
    //             console.log("No")
    //             break;
    //         }
    //     }
    // }
    
    let present=false;
    for(let i=0;i<size;i++){
        if(arr[i]==42){
         present=true;
        }
    }
    if(present){
        console.log("Yes")
    }else{
        console.log("No")
    }
    }




