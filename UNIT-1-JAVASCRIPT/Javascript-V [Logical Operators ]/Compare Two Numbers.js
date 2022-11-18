// Compare Two Numbers Ended
// Description

// You are given two numbers stored in variables with the following names

// one, two

// If the value of the following expression is true, printYes, else printNo

// one > two 


// Input
// The first and the only line of the input contains two numbers, the values stored in the variablesone, two


// Output
// If the expressions given in the problem statement are true, printYes, else printNo


// Sample Input 1 

// 5 6
// Sample Output 1

// No
// Hint

// In the sample test case, the value stored inone = 5, two = 6

// According to the expression, I need to check whether one > two or not.

// Since, 5 > 6 is false , Thus the output will beNo

function compareTwoNumbers(one, two) {
    // Write code here
    if(one>two)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No")
    }
}