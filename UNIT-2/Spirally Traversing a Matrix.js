// Spirally Traversing a Matrix Ended
// Description

// Given a matrix of size n by n. Traverse and print the matrix in spiral form.



// Input
// Input Format

// First-line contains n

// The next n lines contain the matrix

// Constraints

// n <= 1000

// Ai <= 10000




// Output
// Print the matrix in a single line traversing it spirally


// Sample Input 1 

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8
// Sample Output 1

// 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2 
function spirallyTraversingAMatrix(N, matrix){
    //write code here
    let top=0;
    let bottom=N-1;
    let left=0;
    let right=N-1;
    let bag="";
    while(top<bottom && left<right){
        for(i=left;i<=right;i++){
           bag+=matrix[top][i]+" ";
        }
        top++;
        for(i=top; i<=bottom;i++){
           bag+=matrix[i][right]+" ";
        }
        right--;
        for(j=right;j>=left;j--){
            bag+=matrix[bottom][j]+" ";
        }
        bottom--;
        for(i=bottom;i>=top;i--){
            bag+=matrix[i][left]+" ";
        }
        left++;
    }
    console.log(bag);
}
