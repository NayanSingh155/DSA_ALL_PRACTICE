// Infinity Stones Ended
// Description

// You are given five numbers, stored in variables with the following names

//  one, two, three, four, five, six
// The value stored in the variabletwo, five, sixhas been doubled, such that if initially the value was 3, it has become 6

// The value stored in the variablethree, fourhas been increased three times, such that if initially it was 3, it has become 9

// The value stored in the variableonehas not been changed.

// Find the sum of the updated values stored inone, two, three, four, five, six


// Input
// The first and the only line of input contains the values stored in the variableone, two, three, four, five, six


// Output
// Find the sum of the updated values stored inone, two, three, four, five, six


// Sample Input 1 

// 1 2 3 4 5 6
// Sample Output 1

// 48
// Hint

// In the sample test case, the value stored inone = 1, two =2, three = 3, four = 4, five = 5, six = 6

// After updating the values, the values stored becomeone = 1, two = 4, three = 9 , four = 12, five = 10, six = 12

// Adding the updated values the sum becomes1 + 4 + 9 + 12 + 10 + 12 = 48, which is the required answer
function infinityStones(one, two, three, four, five, six) {
    console.log(one*1+two*2+three*3+four*3+five*2+six*2);  //Write code here
      
  }