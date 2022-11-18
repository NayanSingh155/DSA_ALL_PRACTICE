// Sum Practice 2 Ended
// Description

// You are given four numbers, stored in the variables with the following names

// one, two, three, four

// Find the value ofsum1andsum2, such that

// sum1 = one + two 

// sum2 = three + four

// If the sum1 > 10 or sum2 > 15, printYes, else printNo


// Input
// The first and the only line of the input contains the value stored in variablesone, two, three, fourrespectively


// Output
// PrintYes, if the value ofsum1>10orsum2>15, else printNo


// Sample Input 1 

// 1 2 3 4
// Sample Output 1

// No
// Hint

// In the sample test case, the value stored inone = 1, two = 2, three = 3, four = 4

// Therefore, the value of

// sum1 = one + two = 1 + 2 = 3

// sum2 = three + four = 3 + 4 = 7

// Thus we need to check, two condition

// Condition1 : sum1>10 i.e 3>10 False

// Condition2 : sum2>15 i.e 7>15 False

// As Condition1 or Condition2, Both are False

// Thus the output will be No

function sumPractice2(one, two, three, four) {
    // Write code here
    sum1=one+two
    sum2=three+four
    if((sum1>10)&&(sum2>15))
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
        }
    
    
}