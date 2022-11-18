// Longest Repeated Odd Ended
// Description

// You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.


// Input
// Input Format

// First line contains N which is the number of element present in the array.

// Second line contains N integers which are the values of array.

// Constraints

// N<100


// Output
// Output Format

// Output one integer which the maximum number of times an odd number is repeated in array.


// Sample Input 1 

// 12
// 1 1 1 1 2 2 2 2 2 1 1 1
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// 1 is repeated 4 times from index 0 to index 3 => 4 times

// 2 is repeated 5 times from index 4 to index 8 => 5 times

// 1 is repeated 3 times from index 9 to index 11 => 3 times

// So, the output is 4 since 1 is odd.


function runProgram(input){
    input = input.trim().split("\n")
    input.shift()
    let array = input[0].split(" ").map(Number)
    // console.log(array)
    LongestOdd(array)
}
function LongestOdd(array){
    let obj = {}
    for(let i = 0; i < array.length; i++){
       if(array[i]%2 !== 0){
            let count = 1
            for(var j = i+1; j < Infinity; j++){
                if(array[i] == array[j]){
                    count += 1
                }
                else{
                    break;
                }
            }
            obj[i] = count;
            i = j;
        }
    }
    let num = 0
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            num += 1;
        }
    }
    if(num== array.length){
        console.log(0)
    }
    else{
        let max = obj["0"]
        for(let key in obj){
            if( max < obj[key]){
                max = obj[key];
            }
        }
        console.log(max);
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