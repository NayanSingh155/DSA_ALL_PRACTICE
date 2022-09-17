// Repeated and Missing Ended
// Description

// Given an array of size n. Array elements are in the range from 1 to n. In the given array, one number from set {1, 2, …n} is missing and one number occurs twice in the array. Find these two numbers.

// Print the missing one first and then the repeated one with a space character in between them.


// Input
// The first line of each input contains a single integer n (2 ≤ n ≤ 100000).

// The second line of the input contains n integers (1 ≤ Ai ≤ n).


// Output
// For each input, print the answer.


// Sample Input 1 

// 5
// 1 2 3 3 4

// Sample Output 1

// 5 3

// Sample Input 2 

// 2
// 1 1
// Sample Output 2

// 2 1
// Sample Input 3 

// 3
// 1 2 2
// Sample Output 3

// 3 2
// Sample Input 4 

// 7
// 1 2 3 4 5 3 7
// Sample Output 4

// 6 3
// Hint

// For Sample Input 1 :

// 5

// 1 2 3 3 4



// the number which is repeating in the above array is 3

// The general sequence without any repetition will be 1 2 3 4 5

// Looking at the sequence 1 2 3 4 5, we know that 5 is missing the given array



// Thus, missing number is 5 and repeating one is 3

function repeatedAndMissing(n,arr){
    //write code here
    
    let double;
    let missing;

    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) obj[arr[i]] = 1;
        else obj[arr[i]]++;
    }

    for (let i = 1; i <= arr.length; i++) {
        if (obj[i] === 2) double = i;

        if (!obj[i]) missing = i;
    }
    console.log( missing + " " + double);
    
}