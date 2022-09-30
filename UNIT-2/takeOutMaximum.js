// Take out maximum Ended
// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.


// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6


// Output
// Print the maximum sum of a subarray of size k.


// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21

function runProgram(input) {
    input=input.trim().split("\n")
    let len=input[0].trim().split(" ").map(Number)
    let N=len[0]
    let k=len[1]
    let arr=input[1].trim().split(" ").map(Number);
    TakeOutMax(N,k,arr)
	
}
function TakeOutMax(N,k,arr){
    let sum=0;
    for(let i=0;i<k;i++){
        sum+=arr[i];
        
    }
    let max=1;
    for(let i=k;i<N;i++){
        sum=sum-arr[i-k]+arr[i];
        max=Math.max(max,sum)
        
    }
    console.log(max)
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