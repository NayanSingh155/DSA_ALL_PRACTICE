// Remove to Sort Ended
// Description

// Given an array of integers of length n, the task is to remove elements from the array to make array sorted. That is, remove the elements which do not follow an increasing order.


// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6


// Output
// Print the sorted array.


// Sample Input 1 

// 10
// 1 2 4 3 5 7 8 6 9 10
// Sample Output 1

// 1 2 4 5 7 8 9 10

function removeToSort(arr, size){

    let  newArr = [];
    for(let i=0;i<size;i++){        
        if(i==0){
            newArr.push(arr[i]);
        }else if(arr[i] - arr[i-1] >= 0 && arr[i] >= newArr[newArr.length-1]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}

function runProgram(input) {
    
    input = input.trim().split('\n');
    var size = +input[0];
    var arr = input[1].trim().split(' ').map(Number);

    removeToSort(arr, size);

}
if (process.env.USERNAME === "") {
    runProgram(``);
    
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}