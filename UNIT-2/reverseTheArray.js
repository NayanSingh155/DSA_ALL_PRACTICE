// Reverse the array (Without Using Extra Space) Ended
// Description

// You are given an array, such that you have to reverse the array

// Please note that you have to reverse the given array, and using a new array should be avoided

// Also, refrain from printing the elements directly


// Input
// The first line of the input contains the valueN, the size of the array

// The next line containsNspace separated values denoting the values of the array

// Constraints

// 1 <= N <= 100

// 1 <= arr[i] <= 100


// Output
// Reverse the given array, and print it on a single line

// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 5 4 3 2 1
// Hint

// Screenshot 2022-06-03 at 1.48.41 AM.png

// Can you look at the above image, and figure a way out to reverse the array

function  ReverseTheArray(N,array){
    let left = 0;
    let right =array.length-1;
    
    let bag="";
    for(let i=right;i>=left;i--){
        bag+=array[i]+" ";
    }
    console.log(bag);
    
    }
    
    
    
    
    function runProgram(input) {
        input=input.trim().split("\n")
        let N=input[0];
        let line=1;
           let num=input[line].split(" ").map(Number)
           line++
    // 	console.log(N,array)
        ReverseTheArray(N,num)
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
