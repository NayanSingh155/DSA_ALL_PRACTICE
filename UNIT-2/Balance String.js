// Balance String Ended
// Description

// You are given a string s of length n consisting of characters a and/or b.

// Let AB(s) be the count of occurrences of string ab in s as a substring. Analogically, BA(s) is the count of occurrences of ba in s as a substring.

// In one step, you can choose any index i and replace s[i] with the character a or b.

// What is the minimum number of steps you need to make to achieve AB(s) = BA(s)?


// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains integer n, length of the string

// Second-line of each test case contains string s.

// Constraints

// 1 <= T <= 10

// 1 <= n <= 10000


// Output
// For each test case print the minimum number of steps needed to make AB(s) = BA(S).


// Sample Input 1 

// 4
// 1
// b
// 9
// aabbbabaa
// 4
// abbb
// 6
// abbaab
// Sample Output 1

// 0
// 0
// 1
// 1
// Hint

// In the first test case, both AB(s)=0 and BA(s)=0 (there are no occurrences of ab (ba) in b), so can leave s untouched.

// In the second test case, AB(s)=2 and BA(s)=2, so you can leave s untouched.

// In the third test case, AB(s)=1 and BA(s)=0. For example, we can change s1 to b and make both values zero.

// In the fourth test case, AB(s)=2 and BA(s)=1. For example, we can change s6 to a and make both values equal to 1.

