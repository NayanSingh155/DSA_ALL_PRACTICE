// Sum & Compare Ended
// Description

// You are given five numbers, stored in the variables with the following name

//  one, two, three, four, five
// You have to declare another variablesum1, such thatsum1 = one + two + three

// Also, you have to declare another variablesum2, such thatsum2 = four + five

// Finally, you have to print the output of the following operation

//  sum1 > sum2 (This operation prints true, if sum1 is greater than sum2, else it prints false)

// Input
// The first and the only line of input contains the values stored inone, two, three, four, five


// Output
// Print the result of the operation, after finding the values ofsum1andsum2, as explained in the problem statement


// Sample Input 1 

// 1 2 3 4 5
// Sample Output 1

// false
// Hint

// In the sample test case, the values stored in the variables isone = 1, two = 2, three = 3, four = 4, five = 5

// Therefore, the value ofsum1becomessum1 = one + two + three = 1 + 2 + 3 = 6

// Similarly, the value ofsum2becomessum2 = four + five = 4 + 5 = 9

// Now, the result of the operationsum1 > sum2will be false, assum1 = 4is not greater thansum2 = 5. Hence, the output false

function sumAndCompare(one, two, three, four, five) {
    var sum1=one+two+three;
    var sum2=four+five;
    console.log(sum1>sum2);
}