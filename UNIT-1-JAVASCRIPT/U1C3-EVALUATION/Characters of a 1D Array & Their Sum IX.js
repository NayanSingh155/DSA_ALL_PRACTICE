// Characters of a 1D Array & Their Sum IX Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the nameN

// Each element of the string contains one of these symbols -'!', ']', '~'

// The symbols represent the following values

// ! -> 3
// ] -> 6
// ~ -> 9
// You have to find the sum of the string, such that for each symbol add the value of its corresponding values

// For example, consider the value stored inN = 6, and the value stored instr = !]!~]~

// Therefore, replacing each value with it's corresponding value, we get -363969

// Now, adding all these numbers, we get3 + 6 + 3 + 9 + 6 + 9 = 36, which is the required output


// Input
// The first line of the input contains the value stored inN

// The next line stores the value stored instr


// Output
// Print the output as explained in the problem statement

// Sample Input 1 

// 6
// !]!~]~
// Sample Output 1

// 36
// Hint

// In the sample test case, the value stored inN = 6, and the value stored instr = !]!~]~

// Therefore, replacing each value with it's corresponding value, we get -363969

// Now, adding all these numbers, we get3 + 6 + 3 + 9 + 6 + 9 = 36, which is the required output

function characterSum(N, str){
    var sum=0;
    for(var i=0;i<N;i++){
        if(str[i]=="!"){
            sum+=3;
        }if(str[i]=="]"){
            sum+=6;
        }if(str[i]=="~"){
            sum+=9;
        }
        
    }
        console.log(sum);
  }