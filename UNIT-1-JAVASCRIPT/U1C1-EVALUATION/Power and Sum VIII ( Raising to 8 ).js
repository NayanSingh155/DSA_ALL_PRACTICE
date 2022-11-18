// Power and Sum VIII ( Raising to 8 ) Ended
// Description

// You are given two numbers stored in variables with the nameNandMrespectively

// You have to find the value ofsum, such thatsum = N^8 + M^8

// For example, consider the value stored inN = 2, andM = 3

// Therefore,N^8 = 2*2*2*2*2*2*2*2 = 256, andM^8 = 3*3*3*3*3*3*3*3 = 6561

// Therefore,sum = 256 + 6561 = 6817, which is the required answer


// Input
// The first and the only line of the input contains the value stored inNandMrespectively

// Output
// Print the value ofsumas shown in the problem statement

// Sample Input 1 

// 2 3
// Sample Output 1

// 6817
// Hint

// In the sample test case, the value stored inN = 2, andM = 3

// Therefore,N^8 = 2*2*2*2*2*2*2*2 = 256, andM^8 = 3*3*3*3*3*3*3*3 = 6561

// Therefore,sum = 256 + 6561 = 6817, which is the required answer

function numberOperation(N, M){
    // Write your code here! 
    var sum=N**8+M**8;
    
        console.log(sum);
    
    
    }
    