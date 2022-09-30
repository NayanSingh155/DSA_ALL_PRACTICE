// Sum of Equations Ended
// Description

// You are given two numbers, stored in a variable with the names,a, b

// You have to find the sum ofX,YandZ, such that

// 1. X = 2 * a + 6 * b;
// 2. Y = 4 * a + 5 * b;
// 3. Z = 9 * a + 7 * b;

// Find the value of sum, such thatsum = X + Y + Z

// Input
// The first and the only line of the input contains the value stored in thea, b

// Output
// Print the value of the sum, as explained in the problem statement

// Sample Input 1 

// 5 7
// Sample Output 1

// 201
// Hint

// In the sample test case, the value stored ina =5, b = 7

// The value of equations

// X = (2*5) + (6*7) = 10 + 42 = 52

// Y = (4*5) + (5*7) = 20 + 35 = 55

// Z = (9*5) + (7*7) = 45 + 49 = 94

// Therefore, the value ofsum = 52 + 55 + 94 = 201, which is the required output

function sumOfEqs(a, b) {
    let  X = 2 * a + 6 * b;
    let Y = 4 * a + 5 * b;
   let  Z = 9 * a + 7 * b;
        let sum=(X+Y+Z);
        console.log(sum)
  }