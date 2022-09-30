// Compare three Numbers Ended
// Description

// You are given three numbers stored in variables with the following names

// one, two, three

// If the value of both the following expression is true, printYes, else printNo

// 1. one > two 

// 2. one > three


// Input
// The first and the only line of the input contains three numbers, the values stored in the variablesone, two, three


// Output
// If both the expressions 1 and 2, given in the problem statement are true, printYes, else printNo


// Sample Input 1 

// 6 2 4
// Sample Output 1

// Yes
// Hint

// In the sample test case, the value stored inone = 6, two = 2, three = 4

// Condition 1 : one > two ---> 6 > 2 i.e true

// Condition 2 : one > three ----> 6 > 4 i.e true

// Since , Condition 1 and Condition 2 , Both are true therefore the output will be Yes.
function compareThreeNumbers(one, two, three) {
    if((one>two)&&(one>three))
    
        
        {
        console.log("Yes");
        }
    else
    {
      console.log("No");
    }
    }