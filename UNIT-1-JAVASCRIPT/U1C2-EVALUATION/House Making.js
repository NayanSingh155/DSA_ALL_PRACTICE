// House Making Ended
// Description

// You are building your dream house, so you want to use the best possible material for your house

// So, you need material for building the house

// You are given a numberN,which is the total number of material required, and the price of each material is stored in a variableK

// Declare a variable with the nametiles, such thattiles = N*K

// If the value stored intilesis greater than or equal to1000and divisible by 5, printyes, else printno


// Input
// This is a function complete problem. You have to complete the function and print the required output

// The first line of the input contains the value stored inNandK

// Constraints

// 1 <= N, K <= 1000

// Output
// Complete the function and print the required output

// Sample Input 1 

// 250 4
// Sample Output 1

// yes
// Sample Input 2 

// 333 3
// Sample Output 2

// no
// Hint

// In the sample test case, the value stored inN = 250, and the value ofK = 4

// The value oftiles = 250 * 4 = 1000. Now, this value is equal to1000and divisible by5, hence the output isyes

// In the second test case, the value stored inN = 333, and the value ofK = 3

// The value oftiles = 333*3 = 999, which is less than1000and not divisible by5as well, hence the output isno

function rangeOfTwo(N,K) {
    let tiles=N*K
    if(tiles>=1000 && tiles%5==0){
        console.log("yes")
    }
            else{
                console.log("no")
            }
        }