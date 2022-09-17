// Array Sum & Product Equation IX Ended
// Description

// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to find the value of the equation2*x + 10*y,

// where x - product of all elements in the array
// and y - sum of all elements in the array

// For example, consider the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 1*2*3*4 = 24, and the value ofy = 1 + 2 + 3 + 4 = 10

// Therefore, the value of the given equation =2*x + 10*y = 2*24 + 10*10 = 48 + 100 = 148, which is the required answer


// Input
// The first line of the input contains the value stored inN

// The next line contains the elements of the array, which are stored inarr


// Output
// Print the value of the equation, as explained in the problem statement

// Sample Input 1 

// 4
// 1 2 3 4
// Sample Output 1

// 148
// Hint

// In the sample test case, he value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 1*2*3*4 = 24, and the value ofy = 1 + 2 + 3 + 4 = 10

// Therefore, the value of the given equation =2*x + 10*y = 2*24 + 10*10 = 48 + 100 = 148, which is the required answer

function sumAndProductEquation(N, arr) {
    //write yur code here
    var sum=0;
    var prod=1;
   for(var i=0;i<arr.length;i++){
       prod=prod*arr[i]
       sum=sum+arr[i]
   }
   console.log(10*sum+2*prod)
  }