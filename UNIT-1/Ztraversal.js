// Z Traversal Ended
// Description

// Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.

// Image


// Input
// The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

// Next N lines contains N space separated integers, denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000


// Output
// For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 5 7 8 9 

var bag = "";
for (var i = 0; i < N - 1; i++) {
    bag += arr[0][i] + " ";
}
var r = 0;
var c = N - 1;
while (r < N && c >= 0) {
    bag += arr[r][c] + " ";
    r++;
    c--;
}
for (var i = 1; i < N; i++) {
    bag += arr[N - 1][i] + " ";
}
console.log(bag);