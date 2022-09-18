// Product Of Array Ended
// Description

// Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.


// Input
// First Line contains T, size number of test cases.

// First Line of each test case contains N, size of array.

// Second Line of each test case contains N integers, numbers of array.

// Constraints

// 1 <=T<= 10

// 1 <=N= 10^6

// 1 <= A[i] <=100


// Output
// For each test output resulting array on a new line.


// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 3
// 3 2 7
// Sample Output 1

// 120 60 40 30 24
// 14 21 6
// Hint

// For test case 1

// i = 0 ==> 2*3*4*5 = 120

// i = 1 ==> 1*3*4*5 = 60

// i = 3 ==> 1*2*4*5 = 40

// i = 4 ==> 1*2*3*5 = 30

// i = 5 ==> 1*2*3*4 = 24

function product(arr) {
    let n = arr.length;
    let result = "";

    let left = [];
    let right = [];

    left[0] = 1;
    right[n - 1] = 1;

    for (let i = 1; i < n; i++) left[i] = arr[i - 1] * left[i - 1];

    for (let i = n - 2; i >= 0; i--) right[i] = arr[i + 1] * right[i + 1];

    for (let i = 0; i < n; i++) result += left[i] * right[i] + " ";

    return result;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);
    for (let i = 1; i < t * 2; i += 2) {
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(product(arr));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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