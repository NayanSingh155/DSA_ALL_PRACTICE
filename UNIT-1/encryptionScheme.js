// Encryption Scheme Ended
// Description

// You are given an array stored in a variable with the namearray, and the size of the array is stored in a variable with the nameN

// Now, the array contains two types of numbers,0and1

// You have to find the sum of indexes of all the elements in the array at which1is present. For this problem, consider that the indexing starts from 1

// For example, consider the value stored inN = 5, andarr = [0 1 1 1 1], then the sum becomes2 + 3 + 4 + 5 = 14, which is the required output

// Note : The array contain only 0s and 1s


// Input
// The first line of the input contains the value stored inN

// The next line contains the values stored inarray


// Output
// Print the required sum as explained in the problem statement

// Sample Input 1 

// 5
// 0 1 1 1 1
// Sample Output 1

// 14
// Sample Input 2 

// 5
// 0 1 0 1 0
// Sample Output 2

// 6
// Hint

// In the first sample test case, the indexes with the value 1 are2 3 4 5. Therefore, the required sum becomes2 + 3 + 4 + 5 = 14

// In the second sample test case, the indexes with the value 1 are2 4. Therefore, the required sum becomes2 + 4 = 6

function encryptionScheme(N,array){
    let sum=0;
    for(let i=0;i<N;i++){
        if(array[i]==1){
            sum+=(i+1)
        }
    }
console.log(sum)
}