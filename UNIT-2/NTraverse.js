// N traversal Ended
// Description

// You are given a matrix of size n x n. Find theNtraversal of the matrix. Refer the following figure for better understanding.

// Image


// Input
// The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

// Next N lines contain N space separated integers, denoting the values of the matrix.



// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000


// Output
// For each test case, print the N traversal of the matrix on a single line, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 7 4 1 5 9 6 3 



function nTraversal(matrix) {
    let Row=matrix.length;
    let bag="";
    for(let i=Row-1;i>=0;i--){
       bag+=matrix[i][0]+" ";
    }
    for(let i=1;i<Row;i++){
      bag+=matrix[i][i]+" ";
    }
    for(let i=Row-2;i>=0;i--){
      bag+=matrix[i][Row-1]+" ";
    }
    console.log(bag);
}