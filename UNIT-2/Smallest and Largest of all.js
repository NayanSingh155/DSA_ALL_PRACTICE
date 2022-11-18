// Smallest and Largest of all Ended
// Description

// Given an array, A, of N integers, print the smallest and largest element present in the array

// YOU MUST NOT USE ANY BUILT-IN FUNCTION


// Input
// Input Format

// The first line contains an integer, N (the number of integers in A). The second line contains N space separated integers describing A.

// Constraints

// N<100


// Output
// Output Format

// Print 2 integers in different lines where first integer represents the minimum of all elements and second integer represents the maximum of all


// Sample Input 1 

// 4
// -2 0 8 4
// Sample Output 1

// -2
// 8

function runProgram(input){
    input = input.trim().split("\n")
    let line=1;
    let array = input[line].trim().split(" ").map(Number)
    smallestLargest(array)
}
function smallestLargest(array){
    let min=Infinity;
    let max=-Infinity;
    for(let i=0;i<array.length;i++){
        array[i]=+(array[i]);
        if(array[i]<min){
            min=array[i];
        }
        if(array[i]>max){
            max=array[i];
        }
    }
    console.log(min +"\n"+max)
    

}
process.stdin.resume();
process.stdin.setEncoding("");
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