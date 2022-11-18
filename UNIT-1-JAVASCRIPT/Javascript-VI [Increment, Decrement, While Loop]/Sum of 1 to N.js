// Sum of 1 to N Ended
// Description

// You are given a number, stored in a variable with the name N

// Find the sum of al the numbers 1 to N

// For example, if the value stored inN = 5, then the sum of 1 to 5 is

// 1
// 2
// 3
// 4
// 5
// Therefore, the sum becomes,sum = 1 + 2 + 3 + 4 + 5 = 15, which is the required output


// Input
// The first and the only line of input contains the number stored in the variableN


// Output
// Print the sum of all the numbers from 1 to N


// Sample Input 1 

// 5
// Sample Output 1

// 15
// Hint

// if the value stored inN = 5, then the sum of 1 to 5 is

// 1
// 2
// 3
// 4
// 5
// Therefore, the sum becomes,sum = 1 + 2 + 3 + 4 + 5 = 15, which is the required output

function SumBelowN(N) {
    var sum=0;
    for(var i=1;i<=N;i++)
  {
      sum=sum+i;
  }
  console.log(sum);
}