// Swastika & Sum Ended
// Description

// You are given a 2d array with n  rows and mcolumns where n and m are always odd. There are two different parts present in the 2d array and the sum of all the elements of the first part is referred as sum1 and that of the other is referred as sum2. You have to find the absolute difference between sum1 and sum2.

// Look at the given figure to have a better idea of the two different parts

// Image

// As seen, sum1 is formed by all the elements starting from top-right -> to middle column then bisects the figure vertically and then goes to the bottom left of the 2d array

// Similarly. sum2 is formed by all the elements in the top left -> to middle row then bisects the figure horizontally and then goes to the bottom right of 2d array

// Look at the sample test case for better understanding


// Input
// First line contains n and m

// Next n line contains m space separated integers which describe each row of the 2d array

// Constraints

// n, m <= 50


// Output
// Output the absolute difference between sum1 and sum2


// Sample Input 1 

// 3 5
// 1 2 3 4 5
// 6 7 8 9 10
// 11 12 13 14 15
// Sample Output 1

// 0
// Hint

// Explanation 0

// Here, sum1 = 5 + 4 + 3 + 8 + 13 + 12 + 11 = 56

// sum2 = 1 + 6 + 7 + 8 + 9 + 10 + 15 = 56

// abs(sum1-sum2) = 0

