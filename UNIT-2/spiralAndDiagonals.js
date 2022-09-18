// Spirals and Diagonals Ended
// Description

// You are given an integer n. The next line is an array A which contains n*n elements. The spiral traversal of a square matrix of dimension (n x n) results in the given array.

// Calculate the sum of all elements which are on the diagonals of the square matrix.

// The matrix traversal happens in the manner shown in the image below

// spiral-order-traversal-of-a-matrix-.png


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100)

// The second line contains n*n integers (1 ≤ Ai ≤ 1000) - The spiral traversal of a square matrix of dimension n x n.


// Output
// For each test case, print the answer: The sum of elements present in the diagonals of the matrix.


// Sample Input 1 

// 3
// 1
// 1
// 2
// 1 2 3 4
// 3
// 1 2 3 4 5 6 7 8 9
// Sample Output 1

// 1
// 10
// 25
// Sample Input 2 

// 1
// 4
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
// Sample Output 2

// 68

function solve(arr, n) {
    let matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
    let top = 0;
    let left = 0;
    let right = n - 1;
    let down = n - 1;
    let count = 0;

    while (count < n * n) {
        for (let i = left; i <= right && count < n * n; i++) {
            matrix[top][i] = arr[count];
            count++;
        }
        top++;

        for (let i = top; i <= down && count < n * n; i++) {
            matrix[i][right] = arr[count];
            count++;
        }
        right--;

        for (let i = right; i >= left && count < n * n; i--) {
            matrix[down][i] = arr[count];
            count++;
        }
        down--;

        for (let i = down; i >= top && count < n * n; i--) {
            matrix[i][left] = arr[count];
            count++;
        }
        left++;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) sum += matrix[i][i];

    for (let i = 0; i < n; i++) sum += matrix[i][n - i - 1];

    if (n % 2 === 1) {
        let mid = Math.floor(n / 2);
        sum -= matrix[mid][mid];
    }

    return sum;
}

function runProgram(input) {
    let newInput = input.split("\n");
    let t = Number(newInput[0]);

    for (let i = 1; i < t * 2; i += 2) {
        let n = Number(newInput[i]);
        let arr = newInput[i + 1].trim().split(" ").map(Number);
        console.log(solve(arr, n));
    }
}
if (process.env.USERNAME === "getsu") {
    runProgram(`1
    3
    1 2 3 6 9 8 7 4 5`);
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