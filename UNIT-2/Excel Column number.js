// Excel Column number Ended
// Description

// Given a column title as appear in an Excel sheet, return its corresponding column number.

// it is guaranteed that string consists of characters from 'A' - 'Z'.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Input
// 1<=T<=10

// 1<= |Si| <= 10


// Output
// output a single integer for all test case , the solution to the problem


// Sample Input 1 

// 3
// A
// AB
// ZY
// Sample Output 1

// 1
// 28
// 701

function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0];
    for (let i=1; i<=t; i++) {
        let str = input[i];
        // console.log(str);
        excel_Column(str);
    }
}
function excel_Column(str){
    let sum=0;
    let power=str.length-1;
    for (let i=0; i<str.length; i++) {
        let num = str.charCodeAt(i)-64;
        sum+=num*(26**power);
        power--;
    }
    console.log(sum);
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