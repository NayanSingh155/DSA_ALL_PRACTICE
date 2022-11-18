// Even Sum VS Odd Sum Ended
// Description

// You are given an arrayarrof sizeN
// You need to find Odd sum and Even sum
//    Odd Sum is sum of all the elements of the array at odd position
//    Even Sum is sum of all the elements of the array at even position
// If Even Sum is greater than Odd Sum then print "Even" without quotes.
// Else If Odd Sum is greater than Even Sum then print "Odd" without quotes.
// Else print "Even Odd" without quotes.
// Please read the sample test case and its explanation for better understanding.


// Input
// Input Format :

// The first line of input contains an integer N - denoting the size of the array.

// The second line contains the N space-separated integers.


// Constraints :

// 1<=n<= 15

// 1<=A[i]<=100


// Output
// Print either"Even" or "Odd" or "Even Odd" without quotes depending upon the condition mentioned above.


// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// Odd
// Hint

// From the sample input

// Numbers present at even position in array are 1 and 3, whose sum is 4 i.e. even sum = 4

// Numbers present at odd position in array are 2 and 4, whose sum is 6 i.e odd sum = 6

// Since 6>4, Odd is the required output.

function oddVSeven(arr, N){
    var oddSum = 0;
       var evenSum = 0;
   
       for (var i = 0; i < N; i++) {
           if (i % 2 === 0) {
               evenSum = evenSum + arr[i];
           }
   
           if (i % 2 === 1) {
               oddSum = oddSum + arr[i];
           }
       }
   
       if (evenSum > oddSum) {
           console.log("Even");
       } else if (oddSum > evenSum) {
           console.log("Odd");
       } else {
           console.log("Even-Odd");
       }
   }