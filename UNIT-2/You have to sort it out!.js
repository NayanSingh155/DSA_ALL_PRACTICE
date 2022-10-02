// You have to sort it out! Ended
// Description

// Given an array A of non-negative integers of size m. Your task is to sort the array in non-decreasing order and print out the original indices of the new sorted array.

// Example:

// A={4,5,3,7,1}

// After sorting the new array becomes A={1,3,4,5,7}.

// The required output should be "4 2 0 1 3"

// NOTE: The indexing of the array starts with 0.

// IMPORTANT: YOU CANNOT USE BUILT-IN SORT FUNCTION. YOU HAVE TO WRITE A SORTING ALGORITHM - Merge sort or Quick Sort


// Input
// Input Format :

// The first line of input consists of the size of the array

// The next line consists of the array of size m



// Constraints :

// 1<=m<=1000

// 0<=A[i]<=1000


// Output
// Output consists of a single line of integers


// Sample Input 1 

// 5
// 4 5 3 7 1
// Sample Output 1

// 4 2 0 1 3

//Enter code here
function runProgram(input) {
    input=input.trim().split("\n");
    let N=input[0];
    let arr=input[1].split(" ").map(Number)
    SortItOut(N,arr)
	
}
function SortItOut(N,arr){
    let data=[];
    for(let i=0;i<arr.length;i++){
        data.push(i)
    }
    for(let i=0;i<arr.length;i++){
        
        for(let j=0;j<arr.length-1-i;j++){
            
            if(arr[j]>arr[j+1]){
                
            let swap=arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=swap;
            temp=data[j]
            data[j]=data[j+1]
            data[j+1]=temp
        }
    }
}
    console.log(data.join(" "));
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