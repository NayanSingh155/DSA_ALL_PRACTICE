// // dollars and @ Ended
// Description

// You are given a number stored in a variable with the nameN

// Print the required pattern, such that for all numbers in the range[1, N], includingN

// if the number is even, print a single "@" , 
// else print "$" N times without space, on a new line
// For example, consider the value stored inN = 5. Therefore, the required output is

// $$$$$
// @
// $$$$$
// @
// $$$$$

// Input
// The first and the only line of the input contains the value stored inN

// Output
// Print the required pattern as shown in the problem statement

// Sample Input 1 

// 5
// Sample Output 1

// $$$$$
// @
// $$$$$
// @
// $$$$$
// Hint

// In the sample inputN = 5. Therefore, the required output is

// $$$$$
// @
// $$$$$
// @
// $$$$$

function dollarsAnda(N){
    for (var i = 0; i < N; i++) {
        var str = "";
        for (var j = 0; j < N; j++) {
            if (i % 2 === 0) {
                str = str + "$";
            } else  {
          if  (j=== 1) {
                    str = str + "@";
                }
            }
        }
        console.log(str);
    }
}
