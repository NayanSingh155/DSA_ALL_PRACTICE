// Print Grade Ended
// Description

// You are given a number, stored in the variable with the nametotal

// If the following expression is true

// total == 100, print "A", without quotes

// Else if the following expression is true,

// total >= 90, print "B", without quotes

// Else if the following expression is true,

// total >= 80, print "C", without quotes

// Else, print "F", without quotes


// Input
// Input Format

// First and only line of input contains a number which is total marks.

// Constraints

// N <= 100


// Output
// Output Format

// Output the string

// 1.If marks equal to 100 print "A"

// 2.If marks greater than or equal to 90 print "B"

// 3.If marks greater than or equal to 80 print "C"

// 4.else print "F"


// Sample Input 1 

// 80
// Sample Output 1

// C

function printGrade(total) {
    // Write code here
      if(total == 100)
    {
        console.log("A");
    }
    else if (total>=90)
    {
        console.log("B");
    }
    else if(total>=80)
    {
        console.log("C")
    }
    else
    {
        console.log("F")
    }
    

}