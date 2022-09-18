// Row Minimum Ended
// Description

// Given a matrix A of size n and m, you have to print the array of sizen, such that each element representing the minimum of ith row of the matrix A.
// Note : You don't have to take the input, just complete the function and print the required output

// Input
// Input Format

// First-line contains 2 integers n and m representing the number of rows and columns respectively of 2D array arr.

// Following n lines contains m-integers.

// Constraints


// 1 <= n <= 100

// 1 <= m <= 100

// 1 <= arr[i][j] <= 10^4


// Output
// Print the required array as mentioned in the problem statement

// Sample Input 1 

// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 4 7
// Hint

// Minimum of 1st row is 1

// Minimum of 2nd row is 4

// Minimum of 3rd row is 7


function rowMinimum(N,M,arr){
    //write code here
     let bag = "";
    for (var i = 0; i < N; i++) {
        var min = +Infinity;
        for (var j = 0; j < M; j++) {
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
        }
        bag += min + " ";
    }
    console.log(bag);
}