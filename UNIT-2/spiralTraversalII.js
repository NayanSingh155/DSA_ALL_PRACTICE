// Spiral Traversal II (Rectangular Matrix) Ended
// Description

// You are given a matrix of size N x M.

// Print the spiral traversal of the matrix.

// Refer the image given below, for better understanding.

// Screenshot (117).png


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N and M, the number of rows and columns in the given matrix.

// The next N lines contain M values each denoting the elements of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N, M <= 200

// 1 <= A[i][j] <= 200


// Output
// For each test case, print the spiral traversal of the matrix, on a single line, on a new line.


// Sample Input 1 

// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1

// 9 5 1 2 3 4 8 12 11 10 6 7 
// 10 7 4 1 2 3 6 9 12 11 8 5 
// Sample Input 2 

// 1
// 4 3
// 4 5 6
// 3 12 7
// 2 11 8
// 1 10 9
// Sample Output 2

// 1 2 3 4 5 6 7 8 9 10 11 12
// Hint

// The spiral traversal of the elements given in the matrix, is printed in the sample output.


function spiralTraversal(N, M, arr){
    let left=0;
    let right=M-1;
    let top=0;
    let bottom=N-1;
    let count=0;
 //   let x=Math.abs(N-M);
   
     let bag="";
     while(count<N*M){
         for(let i=bottom;i>=top   && count< N*M  ; i--) {
            bag+=arr[i][left]+" ";
            count++;
         }
         left++;
         for(let i=left;i<=right  && count< N*M  ; i++) {
            bag+=arr[top][i]+" ";
            count++;
         }
         top++;
         for(let i=top;i<=bottom  && count<N*M  ; i++){
           bag+=arr[i][right]+" ";
           count++;
         }
         right--;
         for(let i=right;i>=left  && count<N*M  ; i--){
           bag+=arr[bottom][i]+" ";
           count++;
         }
         bottom--;
     }
     console.log(bag)
         
 }