// Circular Traversal Ended
// Description

// Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

// Note: No element should be visited more than once.

// Image


// Input
// The first line of the input contains T, the number of test cases.

// The next line contains N, the size of the square matrix.

// The next N lines contains N space separated integers each denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 50

// 1 <= A[i][j] <= 50


// Output
// For each test case, print the elements that lie on the reverse U traversal, on a single line, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 7 4 1 2 3 6 9 8 
// Hint

// The elements that lie on the circular traversal of the given matrix are - 7,4,1,2,3,6,9,8

function cirTraversal(matrix,N) {
    let bag = "";
    let top = 0;
    let bottom = N-1;
    let left = 0;
    let right = N-1;
        
    for (let i=bottom;i>=top ;i--) {
    bag+=(matrix[i][left])+" ";
    
    }
    left++;
    for (let i=left;i<=right ; i++){
    bag+=(matrix[top][i])+" ";
     
    } 
    top++;
    for (let i=top;i<=bottom ; i++) {
    bag+=(matrix[i][right])+" ";
    
    }
    right--;
    for (let i=right;i>=left  ; i--){
    bag+=(matrix[bottom][i])+" ";
     
    }
    
    console.log(bag);
}