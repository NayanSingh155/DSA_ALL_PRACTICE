// String Modification-1 Ended
// Description

// You are given a string of even size length, such that the length of the string is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// You have to modify the string, such that the second half of the string is added to the front, while the first half of the string is to be moved to the back

// For example, consider the value stored inN = 4, andstr = aman. Therefore, the first half has to the string has to be moved to the back, while the second half of the string has to be moved to the front. Therefore, the newly generated string becomesanam, which is the required answer


// Input
// The first line of the input contains the value stored inN, the length of the string

// The next line contains the value stored instr


// Output
// Print the modified string, as explained in the problem statement

// Sample Input 1 

// 4
// aman
// Sample Output 1

// anam
// Hint

// In the sample test case, value stored inN = 4, andstr = aman. Therefore, the first half has to the string has to be moved to the back, while the second half of the string has to be moved to the front. Therefore, the newly generated string becomesanam, which is the required answer

function stringModification(N,str) {
   
    let start=N/2
    let end=N-1
    let bag="";
 for(let i=start;i<=end;i++){
     bag+=str[i]
 }
 
  let bag2=""
 for(let i=0 ;i<start;i++)
    {
         bag2=bag2+str[i]
     }
    //  console.log(bag2);
     console.log(bag+bag2)
 }
