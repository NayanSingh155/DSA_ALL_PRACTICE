// Maximum Occurring Element Ended
// Description

// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print the one which comes first in the array.


// Input
// Input Format

// First line contains N

// The second line contains N integers separated by spaces.

// Constraints

// N < 100

// The array contains integers only


// Output
// Print one integer, the one which is present the maximum number of times.


// Sample Input 1 

// 5
// 0 2 0 6 9
// Sample Output 1

// 0
// Hint

// Sample 1 Explanation

// Since 0 is present the maximum number of times (2 times) => The answer is 0

function maximumOccuringElement(A,N){
 
    let obj = {};
    for (let i = 0; i < N; i++) {
        let x = A[i];
        if (obj[x] === undefined){
            obj[x] = 1;
        }else{
            obj[x]++;
        }
    }

    let count = 0;
    let maxEle = -1;

    for (let i in obj){
        if (obj[i] > count) {
            count = obj[i];
            maxEle = i;
        }
    }
    console.log(maxEle);
}


