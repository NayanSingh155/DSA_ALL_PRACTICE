// Two Primes Ended
// Description

// You are given two numbers, stored in variables with the following namesa, b

// If both the numbers are prime, printTrue, else printFalse


// Input
// The first and the only line of input contains the value stored ina, brespectively


// Output
// Print the output as explained in the problem statement


// Sample Input 1 

// 11 17
// Sample Output 1

// True
// Hint

// In the sample test case, the value stored ina = 11, and the value stored inb = 17. Since, both the numbers are prime, we printTrue

function twoPrimes(a,b) {
    var count=0;
    for(var i=1;i<=a && i<=b;i++){
       if(a%i==0 || b%i==0){
         count++;
       }
    }
    if (count==2){
     console.log("True");
    }else{
        console.log("False");
    }
}
