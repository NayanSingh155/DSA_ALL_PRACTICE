// Find The Middle Ended
// Description

// You are given three integers namely a, b, and c. And you have to print the integer which is greater than or equal to one element and less than or equal to another element, means

// suppose b>=a and b<=c then print b or if a>=c and a<=b then print a.
// For Example : Given three integers are 4, 2, 6 and here we can clearly see that 4>=2 and 4<=6 so print 4 as your answer.

// Input
// Input Format

// The first line contains three integers a, b, and c.

// Constraints

// 1 <= a, b, c <= 100


// Output
// Print the required output according to the given conditions.


// Sample Input 1 

// 4 8 6
// Sample Output 1

// 6
// Sample Input 2 

// 88 70 60
// Sample Output 2

// 70
// Hint

// For the first sample,

// As 6>=4 and 6<=8, that is it is satisying the given conditions so our answer is 6 and print 6.

// For the second sample,

// As 70>=60 and 70<=88, that is it is satisying the given conditions so our answer is 70 and print 70.

function findMiddle(a, b, c) {
    // write code here
    if(a<b && a>c || a>b && a<c)
    {
        console.log(a);
    }
    else if(b>=a && b<=c || b<a && b>c)
    {
        console.log(b);
    }
    
    else
    {
        console.log(c);
    }
   
       
  }