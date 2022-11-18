// Strings - I -14596:40:15
// Description

// Single String, where the size of the string is given


// Input
// The first line of the input containsN, the size of the string

// The next line contains the string itself


// Output
// Print the string given as input, in terms of output, as shown in the sample test case

// Sample Input 1 

// 4
// aman
// Sample Output 1

// aman

function runProgram(input) {
    var out = input.split("\n");
    console.log(out[1]);

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