// Characters of 1D Array & Sum II Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the nameN

// Each element of the string contains one of these symbols -'@','%','&','#','^'

// The symbols represent the following values

// '@'-> 0
// '%'-> 1
// '&'-> 2 
// '#'-> 3
// '^'-> 4
// You have to find the sum of the string, such that for each symbol add the value of its corresponding values

// For example, consider the value stored inN = 5, and the value stored instr = @%&#^

// Therefore, replacing each value with its corresponding value, we get -01234

// Now, adding all these numbers, we get0 + 1 + 2 + 3 + 4 = 10, which is the required output


// Input
// The first line of the input contains the value stored inN

// The next line stores the value stored instr


// Output
// Print the output as explained in the problem statement.

// Sample Input 1 

// 5
// @%&#^
// Sample Output 1

// 10
// Hint

// From the sample test case, the value stored inN = 5, and the value stored instr = @%&#^

// Therefore, replacing each value with its corresponding value, we get -01234

// Now, adding all these numbers, we get0 + 1 + 2 + 3 + 4 = 10, which is the required output

function char1DArraySum(N, str){
    let bag=0;
      for(let i=0;i<N;i++){
          if(str[i]=="@"){
              bag+=0;
          }if(str[i]=="%"){
              bag+=1;
          }if(str[i]=="&"){
              bag+=2;
              
          }if(str[i]=="#"){
              bag+=3;
          }if(str[i]=="^"){
              bag+=4
          }
      }
      console.log(bag)
    }