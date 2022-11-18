// Units Consumed Ended
// Description

// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// test.png

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// Given the bill, write a program to find the number of units consumed.


// Input
// Input Format:

// First and the only line of input contains the bill amount

// Constraints:

// Bill amount is an integer <= 1000


// Output
// Output the number of units consumed


// Sample Input 1 

// 930
// Sample Output 1

// 170

function runProgram(input) {
    input=input.trim().split("\n");
    input=+input[0];
    let N=input;
    // console.log(n)
    unitsConsumed(N) 
}  
function unitsConsumed(N) {
    let unit=0;
    N-=80;
    if(N>=650){
       unit=150+(N-650)/10;
    }
    else if(N>=150){
       unit=50+(N-150)/5;
    }
    else if(N>0&&N<150){
       unit=N/3;
    }
    else if(N==0){
       unit=0;
    }
    console.log(unit);
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