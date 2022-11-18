// sum of series Ended
// Description

// Given two integers N, X. Find the value of the series: 1 + x + x*x  + x*x*x + x*x*x*x +-------N the term

// WhereN is the no. of term,

// X contains the value of x.



// Note : If N <= 0 or X <= 0 print -1



// For Example

// Give N = 3, X = 2

// We need to find the sum of first N=3 terms, having value of X=2
// First 3 terms in Expression = 1 + x + x*x = 1 + 2 + 2*2 = 7
// Answer is 7 

// Input
// The first and the only line of the input contains N and X,

// Constraints

// 1 <= N <= 20

// 1 <= X <= 10


// Output
// Print the value of the series1 + x*x  + x*x*x + x*x*x*x +-------N the term


// Sample Input 1 

// 3 2
// Sample Output 1

// 7
// Hint

// Give N = 3, X = 2

// We need to find the sum of first N=3 terms, having value of X=2
// First 3 terms in Expression = 1 + x + x*x = 1 + 2 + 2*2 = 7
// Answer is 7

function sumOfSeries(N, X) {
    if(N<=0 ||X<=0){
        console.log("-1");
    }else{
       var sum=1;
       for(var i=1;i<N;i++){
      sum=sum+(X**i);
    }
       console.log(sum);
}
}