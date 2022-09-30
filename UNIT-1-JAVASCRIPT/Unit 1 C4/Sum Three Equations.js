// Sum Three Equations Ended
// Description

// You are given two numbers, stored in a variable with the names,a, b

// You have to find the sum ofX,YandZ

// 1. X = (a*3) + (b*5)

// 2. Y = (a*7) + (b*4)

// 3. Z = a*b
// Find the value of sum, such thatsum = X + Y + Z


// Input
// The first and the only line of the input contains the value stored in thea, b


// Output
// Print the value of the sum, as explained in the problem statement


// Sample Input 1 

// 2 3
// Sample Output 1

// 53
// Hint

// In the sample test case, the value stored ina = 2, b = 3

// The value of

// X = (2*3) + (3*5) = 6 + 15 = 21

// Y = (2*7) + (3*4) = 14 + 12 = 26

// Z = 2 * 3 = 6

// Therefore, the value ofsum = 21 + 26 + 6 = 53, which is the required output
function sumThreeEquations(a,b){
    //Enter code here
    
    var X=(a*3) + (b*5);
    var Y=(a*7) + (b*4);
    var Z = a*b;
    var sum=X+Y+Z;
    
        
    
    console.log(sum);
    
    
    }