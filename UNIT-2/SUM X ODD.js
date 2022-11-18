// SUM X ODD Ended
// Description

// You are given a 2D array with N rows and N columns, having positive integers. X is defined as the collection elements of the left diagonal and right diagonal of the array. Check if the sum of all the elements of X is odd or not.


// Input
// First line: Single integer denoting the value of T - the number of test cases.

// For each test case:

// First line: Single integer denoting the value of N.

// N lines follow:

// Each of the lines consists of N single space-separated integers, denoting a row of a matrix.



// Constraints:

// 1 <= T <= 10
// 1 <= N <= 50
// The value any of array element doesn't exceed 100.


// Output
// For each test case, print in a new line, "yes"(without quotes) if the sum of X is odd. Else print "no"(without quotes).


// Sample Input 1 

// 2
// 2
// 1 1
// 3 4
// 3
// 1 1 1
// 2 2 2
// 4 4 4
// Sample Output 1

// yes
// no
// Hint

// Given test cases,

// Test 1:

// N = 2, and given 2D array:

// 1  1

// 3  4

// The left diagonal contains 1 4.

// The right diagonal contains 1 3.

// Hence the sum of elements of X is 1 + 1 + 3 + 4 = 9, which is odd. Hence the answer is yes.

// Test 2:

// N = 3, and given 2D array:

// 1  1  1
// 2  2  2
// 4  4  4

// The left diagonal contains 1 2 4.

// The right diagonal contains 1 2 4.

// Hence the sum of elements of X is (1 + 2 + 4 + 1 + 2 + 4) - 2 = 12, since 2 is common to both left and right diagonal. Since 12 is even, the answer is no.

