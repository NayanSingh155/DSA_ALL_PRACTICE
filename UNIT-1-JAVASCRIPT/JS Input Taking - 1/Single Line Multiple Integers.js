// Single Line Multiple Integers -14596:42:20
// Description

// Single Line Multiple Integers


// Input
// The first and the only line of the input contains the 4 integers, given as input


// Output
// Print each integer given as input, on a new line as output by adding 1 to it


// Sample Input 1 

// 1 2 3 4
// Sample Output 1

// 2
// 3
// 4
//5

function runProgram(input) {
    var out = input.trim().split(" ").map(Number);

    for (i = 0; i < out.length; i++) {
        console.log(out[i] + 1);
    }
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