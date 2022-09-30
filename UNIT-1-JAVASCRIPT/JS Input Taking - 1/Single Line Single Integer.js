// Single Line Single Integer -14596:43:13
// Description

// Single Line Single Integer


// Input
// The first and the only line contains the single integer, which is the input


// Output
// Print the input taken as the output by adding 1 to the input


// Sample Input 1 

// 4
// Sample Output 1

// 5
// Language: 
  

function runProgram(input) {
    var output = Number(input);
    console.log(output + 1);
}

if (process.env.USER === "") {
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