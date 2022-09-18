// Capital Letters in String Ended
// Description

// You are given a string stored in a variable with the namestr, containing a mix of upper case and lower case English characters

// The length of the string is stored in stored in a variable with the nameN

// You have to solve the equation5*x, wherexis the number of capital upper case English characters in the string

// For example, consider the value stored inN = 5, andstr = AmanZ

// The number of upper case characters in the string is 2 -A, Z

// Therefore, the value of the equation5*x, becomes5*2 = 10, which is the required answer


// Input
// The first line of the input contains the value stored inN

// The second line of the input contains the value stored instr


// Output
// Solve the equation given in the problem statement, as explained

// Sample Input 1 

// 5
// AmanZ
// Sample Output 1

// 10
// Hint

// In the sample test case, the value stored inN = 5, andstr = AmanZ

// The number of upper case characters in the string is 2 -A, Z

// Therefore, the value of the equation5*x, becomes5*2 = 10, which is the required answer

function capitalLetterInString(N, str){
    let count=0;
    let bag="";
    let capital="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small="abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<N;i++){
        for(let j=0;j<capital.length;j++){
            if(capital[j]==str[i]){
                bag+=capital[j];
                count++;
            }
        }
    }
    console.log(count*5);
 }