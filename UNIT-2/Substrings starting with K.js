// Substrings starting with K Ended
// Description

// You are given a string A, of length N, and a character K. Find all the substrings of A, that start with K. Refer the sample I/O for better understanding.

// Note: The string contains lower case letters only.


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N, the length of the string.

// The next line contains A, the string itself.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 50


// Output
// For each test case, print the number of substrings that start with the given character K, for each string, on a new line.


// Sample Input 1 

// 1
// 4
// aman
// a
// Sample Output 1

// 6
// Hint

// In the given sample test case, the given string A = "aman". The total number of substrings of the string A, are ->[a, am, ama, aman, m, ma, man, a, an, n]. The given character K is 'a'. The total number of substrings starting with a are 6, which are {a,am,ama,aman,a,an}. Therefore, the required output is 6.

function substringsStartingWithK(N,A,K){
    let count=0;
    for(let i=0;i<N;i++){
        let bag="";
        for(let j=i;j<N;j++){
            bag+=A[j];
            if(bag[0]==K){
                count++;
            }
        }
    }
   console.log(count)
}