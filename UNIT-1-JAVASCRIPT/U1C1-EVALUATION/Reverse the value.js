// Reverse the value Ended
// Description

// You are given a number stored in a variable with the namenum

// You have to reverse the number

// For example, the number stored in the variablenum = 971, then the required output will be179

// Note : The number does not contain any leading zeroes

// Input
// The first and the only line of input contains the value stored in the variablenum


// Output
// Reverse the number, and print it, as given in the problem statement


// Sample Input 1 

// 971
// Sample Output 1

// 179
// Hint

// In the sample test case, the value stored innum = 971, therefore, the required output becomes,179

function reverseTheValue(num) {
    // Write code here
 var bag="";
 var x=num.toString()
//  console.log(typeof(x));
 for(var i=x.length-1;i>=0;i--)
 {
     bag+=+Number(x[i])
 }
  console.log(bag);
  
 
}