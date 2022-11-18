// The Senior Citizen Ended
// Description

// You are given a number stored in a variable, with the nameage

// Check whether the age is greater than and equal to 60 or not.

// If true, Then print "Senior Citizen"

// otherwise "Not Senior Citizen".


// Input
// The first and the only line of the input contains the number stored in the variablenumber

// Constraints

// 1 <= N <= 100


// Output
// If the value stored inage, is greater than and equal to 60 Then printSenior Citizen, else printNot Senior Citizen

// Sample Input 1 

// 50
// Sample Output 1

// Not Senior Citizen
// Hint

// the sample input, age = 50

// Since 50 is less than 60.

// Thus, the output will be"Not Senior Citizen"

function isSeniorCitizen(age) {
    // Write code here
   if(age>=60)
   {
       console.log("Senior Citizen");
   }
   else
   {
       console.log("Not Senior Citizen")
   }
}