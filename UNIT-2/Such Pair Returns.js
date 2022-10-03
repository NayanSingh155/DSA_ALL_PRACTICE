// Such Pair Returns Ended
// Description

// For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).


// Input
// 10^6Input Format :

// First line contains T, no of test cases.

// First line of each test case contains 2 space separated integers: N & K

// Second line of each test case contains **N** space separated integers

// Constraints :

// 1 <= T <= 10

// 1 <= N <=1000000

// 1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6




// Output
// Output 1/-1 depending on the condition for each test case on new line


// Sample Input 1 

// 1
// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1


function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line=1;
    for (var i =0; i<tc; i++) {
        let [N,K]= input[line].split(" ").map(Number);
        line++;
        var arr = input[line].split(" ").map(Number);
        line++;
       var A= arr.sort(function (a, b) {
        return a - b;
    });
        // console.log(N, K, arr);
        suchpair(N, K, A);
    }

}
function suchpair(N, K, A) {
    
    var flag = false;
    var start = 0;
    var end = N - 1;
    while (start < end) {
        if (A[start] + A[end] == K) {
            flag = true;
            break;
        }
        else if (A[start] + A[end] > K) {
            end--;
        }
        else {
            start++;
        }
    }
    if (flag) {
        console.log(1);
    }
    else {
        console.log(-1);
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