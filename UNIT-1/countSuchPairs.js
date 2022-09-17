// Count such pairs Ended
// Description

// You are given an arrayAofNintegers along with a target integerK.

// Your task is to find out the number of pairs of integers present in the array, whose sum is equal to the target valueK.


// Input
// Input Format :

// First line contains 2 integers: N and K.

// Second line contains N space separated integers which are the elements of the array.

// Constraints :

// 1 <= N <= 100


// Output
// Print the count of such pairs whose sum is K.


// Sample Input 1 

// 5 9
// 3 0 6 2 7
// Sample Output 1

// 2

function countSuchPairs(N,K,A){
    //write code here
    let count=0;
    for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
            if(A[i]+A[j]==K){
                count++;
            }
        }
    }
    console.log(count)
}