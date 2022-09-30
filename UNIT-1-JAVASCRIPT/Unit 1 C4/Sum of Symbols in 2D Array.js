// Sum of Symbols in 2D Array Ended
// Description

// You are given a 2D array, such that the dimensions of the 2D Array are stored in the variableNandM

// Each cell of the the 2D array, contains the following symbols -$, %, *

// The meaning of each of the symbols is as follows -'$' -> 7, '%' -> 8, '*' -> 9

// You have to find the sum of the values according to the symbols present in the 2D array, for each row

// For example, consider the value stored inN = 3, andM = 3. The matrix given is as follows

// $%$
// %**
// *$%

// Therefore, converting each symbol into its corresponding number we get
// 787
// 899
// 978

// Now, we have to get the sum of all the values in this matrix, so we get
// 7 + 9 + 7 + 9 + 8 + 9 + 8 + 8 + 7 = 72

// Therefore, 72 is the required answer

// Input
// The first line of the input contains the value stored inNandM

// The nextNline containMcharacters each, denoting the elements of the 2D array


// Output
// Print the output as explained in the problem statement

// Sample Input 1 

// 3 3
// $%$
// %**
// *$%
// Sample Output 1

// 72
// Hint

// In the sample test case, the value stored inN = 3, andM = 3. The matrix given is as follows

// $%$
// %**
// *$%
// Therefore, converting each symbol into its corresponding number we get
// 787
// 899
// 978
// Now, we have to get the sum of all the values in this matrix, so we get
// 7 + 9 + 7 + 9 + 8 + 9 + 8 + 8 + 7 = 72
// Therefore,72is the required answer
function symbolsAndNumbers(N, M, arr){
    let char="$%*"
    let obj={}
    let store=7;
    for(let i=0;i<char.length;i++){
        obj[char[i]]=store;
        store++
    }
    let sum=0;
    for(let j=0;j<N;j++){
        for(let k=0;k<M;k++){
            sum+=obj[arr[j][k]]
        }
    }
    console.log(sum)
 }