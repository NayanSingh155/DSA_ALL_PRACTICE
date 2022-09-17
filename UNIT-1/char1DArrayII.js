// Characters of 1D Array II Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// Each element of the string contains one of these symbols@,%,&,#,^

// The symbols represent the following values

// '@'-> 0
// '%'-> 1
// '&'-> 2 
// '#'-> 3
// '^'-> 4

// You have to generate a string, such that each symbol is replaced by its corresponding values

// For example, consider the value stored inN = 5, and the value stored instr = @%&#^

// Therefore, replacing each value with its corresponding value, we get -01234, which is the required answer.


// Input
// The first line of the input contains the value stored inN

// The next line stores the value stored instr


// Output
// Print the output as explained in the problem statement.

// Sample Input 1 

// 5
// @%&#^
// Sample Output 1

// 01234
// Hint

// From the sample test case, the value stored inN = 5, and the value stored instr = @%&#^

// Therefore, replacing each value with its corresponding value, we get -01234, which is the required answer.

function char1DArray(N, str){
    let bag="";
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