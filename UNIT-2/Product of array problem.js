// Product of array problem Ended
// Description

// You are given an array of N positive integers. Write a program to output the product of all the elements present in the array.

// Note : You have to write a recursive code for this problem


// Input
// Input Format:

// First line contains N.

// Second line contains N space separated integers

// Constraints:

// N<100


// Output
// Output one number which is the product of all elements.


// Sample Input 1 

// 5
// 3 5 2 9 4
// Sample Output 1

// 1080
//Enter code here
function runProgram(input){
    input = input.trim().split("\n")
    let array = input[1].split(" ")
    let product = 1;
    for(let i =0; i < array.length; i++){
        array[i] = Number(array[i])
        product = product * array[i]
    }
    console.log(product)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});