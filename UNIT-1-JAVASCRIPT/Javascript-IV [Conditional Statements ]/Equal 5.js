// Equal 5 Ended
// Description

// You are given two numbers, stored in the variable with the name x and y

// Calculate the sum of x and y as sum = x + y

// if sum > 5 , Then print "Above 5"

// else If sum < 5 , then print "Below 5"

// else print "Equal 5"


// Input

// Input Format

// There are two integer in input


// Output

// Output Format

// Print "Above 5" or "Below 5" or "Equal 5" depending on the value of sum.


// Sample Input 1 

// 2 3
// Sample Output 1

// Equal 5
// Language: 
  

function equalTo(x,y){
    // Write your code here! 
     var sum=x+y;
       if(sum>5)
       {
           console.log("Above 5");
       }
       else if(sum<5)
       {
           console.log("Below 5");
       }
       else
       {
           console.log("Equal 5");
       }
       
    
    }