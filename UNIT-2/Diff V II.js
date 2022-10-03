// Diff V II Ended
// Description

// Given a 2D array with N rows and M columns. Given a pattern containing the array elements in V shape, starting from the top right corner and ending up at the bottom right corner as given below:
// prob1.png

// Calculate the maximum absolute difference possible between the array elements that are contained in the V shape.

// Note - Assume 1-based indexing.


// Input
// First line: Single integer denoting the value of T - the number of test cases.

// For each test case:

// First line: Two single space-separated integers denoting the value of N and M.

// N lines follow:

// Each of the lines consists of M single space-separated integers, denoting a row of a matrix.

// Constraints:

// 1 <= T <= 100
// 1 <= N,M <= 100


// Output
// For each test case, print in a new line, a single integer denoting the maximum absolute difference possible between the integers that are contained in the V shape. If it is not possible to traverse the V shape, print -1.


// Sample Input 1 

// 2
// 5 3
// 1 2 3
// 4 5 6
// 7 8 9
// 1 6 5
// 2 4 8
// 2 2
// 1 4
// 2 6
// Sample Output 1

// 5
// -1
// Hint

// You are to print the sum of elements of matrix which are at following positions:
// (1,M),(2,M-1),(3,M-2), ........, (M-1,2), (M,1), (M+1,2),(M+2,3), ......, (N,M).
// Given test cases,

// Test 1:
// N = 5, M = 3, and given 2D array:

// 1 2 3
// 4 5 6
// 7 8 9
// 1 6 5
// 2 4 8

// Elements at required positions:
// (1,3) - 3, (2,2) - 5, (3,1) - 7, (4,2) - 6, (5,3) - 8.
// Hence the maximum absolute difference possible is | 8 - 3 | = 5.

// Test 2:
// Elements at required positions:
// (1,2) - 4, (2,1) - 2.
// There are no elements to be traversed further, hence you can't reach the bottom right corner of the array. Hence the answer is -1.

