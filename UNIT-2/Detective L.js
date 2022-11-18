// Detective L Ended
// Description

// L is a famous detective in the anime series Death Note and is known for solving puzzles and riddles for investigation.

// There is a security breach in Tokyo Police and they want L's help.He is given the security matrix of dimension [nxm] by the police.

// L decodes that his rival Light has breached the security matrix and has followed a specific way of accessing the matrix. Below is the image of its traversal. Surprisingly, the traversal is in the L shape.

// l.png

// He is busy with some other clients and he knows you who can code this traversal and print the traversal in the single line.

// Can you print the traversal?


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

// The first line of each test case contains two integers n and m (1 ≤ n,m ≤ 100) — The dimensions of the matrix A.

// The next n lines of each test case contain m integers (1 ≤ Aij ≤ 1000) - The input matrix A.


// Output
// For each test case, print the answer: The traversal required.


// Sample Input 1 

// 2
// 3 3
// 1 2 3
// 4 5 6
// 7 8 9
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1

// 1 4 7 8 9 2 5 6 3 
// 1 4 7 10 11 12

function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let line=1;
    for(let i=0;i<tc;i++){
        let [n,k]=input[line].split(" ").map(Number);
        line++;
        let mat=[];
        for(let j=0;j<n;j++){
            mat.push(input[line].trim().split(" ").map(Number));
            line++;
            // console.log(n,k,mat);
        }
        detective_L(n,k,mat);
    }
function detective_L(n,k,mat){
    let top=0;
    let bottom=n-1;
    let left=0;
    let right=k-1;
    let count=0;
    let bag="";
    while(count<n*k){
        for(let i=0;i<=bottom && count<n*k ;i++){
            bag+=mat[i][left]+" ";
            count++;
        }
        left++;
        for(let i=left;i<=right &&count<n*k ;i++){
             bag+=mat[bottom][i]+" ";
            count++;
        }
        bottom--;
    }
    console.log(bag);
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