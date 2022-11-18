// Single Array -14596:41:30
// Description

// Single Array


// Input
// The first line containsNthe size of the array

// The next line containsNspace separated integers, denoting the elements of the array


// Output
// Print the elements of the array on a single line, by adding 1 to each element


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 2 3 4 5 6
function runProgram(input) {
    var arr = input.trim().split("\n");
    var size = Number(arr[0]);
    var array = arr[1].split(" ").map(Number);

    var bag = "";
    for (i = 0; i < array.length; i++) {
        bag += (array[i] + 1) + " ";
    }
    console.log(bag);
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