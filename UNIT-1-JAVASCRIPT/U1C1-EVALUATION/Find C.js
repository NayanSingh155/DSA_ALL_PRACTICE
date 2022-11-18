// Find C Ended
// Description

// You are given a numberC. Find the value ofC, after doing the following operations:-
// 1. C is multiplied by 5
// 2. 20 is added in the new value of C.
// 3. 5 is subtracted from the new value of C.

// Input
// Input will contain one numberC.
// Constraints:

// 0 < C < 100


// Output
// Output should be the numberRafter performing the above operations.

// Sample Input 1 

// 5
// Sample Output 1

// 40
// Hint

// In the sample input C = %, the following operations will look like this:-

// 1. C is multiplied by 5 -> C = 5 * 5 -> 25
// 2. 20 is added in the new value of C. -> C = 25 + 20 -> 45
// 3. 5 is subtracted from the new value of C. -> C = 40 - 5 -> 40


function findC(C) {
	//write your code here
	console.log(C*5+20-5);
}