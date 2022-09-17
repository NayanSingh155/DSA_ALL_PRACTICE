// Binary String 4 Ended
// Description

// You are given a string stored in a variable with the namestr, whose length is stored in a variable with the nameN

// The string is binary, which means it contains only 1's and 0's

// You have to find the length of the longest substring which starts at 0 and ends at 0 as well

// For example, consider the value stored inN = 4, andstr = 1001

// All the non empty subarrays of the given string are

// 1
// 10
// 100
// 1001
// 0
// 00
// 001
// 0
// 01
// 1

// The longest substring starting at 0 and end at 0 is00, whose length is 2. Therefore, the required output is2
// Note : If the count of 0's in the given string is less than or equal to 1, 
// then the output should be 0, as there are no substring starting and ending at 0


// Input
// The first line of the input contains the value stored inN

// The second line contains the value stored instr


// Output
// Print one number, denoting the length of the longest substring starting with 1 and end at 1 as well

// Sample Input 1 

// 6
// 110101
// Sample Output 1

// 3
// Sample Input 2 

// 5
// 11011
// Sample Output 2

// 0
// Hint

// In the first sample test case, the value stored atN = 6, andstr = 110101. The longest substring starting at 0, and ending at 0 is010, whose length is 3. Therefore, the required output is 3

// In the second sample test case, the value stored atN = 5, andstr = 11011. The string contains only one 0, therefore, the required output is 0

