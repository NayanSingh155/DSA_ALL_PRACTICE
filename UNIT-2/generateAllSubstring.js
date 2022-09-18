// Generate all substrings Ended
// Description

// You are given a string A of size N. Print all the non empty substrings of the string.

// Note: You have to print the strings in an order such that all the substrings, starting with the first character are printed first, then all the substrings starting with the second character are printed, and so on. Refer the sample I/O for better understanding.

// Note: The string contains only lowercase letters.


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case, contains N, the length of the string.

// The next line contains the string itself.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 30


// Output
// For each test case, print all the substrings of the given string, in the order given in the sample test case.


// Sample Input 1 

// 1
// 4 
// aman
// Sample Output 1

// a 
// am 
// ama 
// aman 
// m 
// ma 
// man 
// a 
// an 
// n
// Hint

// In the sample test case, the string given is "aman". All the non empty substrings of the string "aman" are printed, such that first the substrings starting with the first character are printed, then with the second one, and so on.

function AllsubString(N,str){
    for(let i=0;i<N;i++){
        let bag="";
        for(let j=i;j<N;j++){
            bag+=str[j];
            console.log(bag)
        }
    }
}
function runProgram(input) {
input=input.trim().split("\n");
let tc=+input[0];
let line=1;
for(let i=0;i<tc;i++){
    let N=+input[line];
    line++;
    let str=input[line];
    line++;
    AllsubString(N,str);
}

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
