// Rectangular Matrix - Multiple Test Cases Ended
// Description

// Rectangular Matrix - Multiple Test Cases


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case containsN, andMthe dimension of the matrix

// The nextNlines containMelements each denoting the elements of the matrix


// Output
// For each test case, print the elements of the matrix row by row by adding 1 to each element, as shown in the sample test case

// Sample Input 1 

// 2
// 3 4 
// 1 2 3 4
// 5 6 7 8 
// 9 10 11 12
// 2 3
// 1 2 3 
// 4 5 6
// Sample Output 1

// 2 3 4 5
// 6 7 8 9
// 10 11 12 13
// 2 3 4
// 5 6 7

function runProgram(input) {
    input = input.split("\n");
    let tc = +input[0];
    let line = 1;
    for(let i = 0; i < tc; i++){
        let [r,c] = input[line].split(" ").map(Number);
           line++;
        let mat = [];
        for(let j = 0; j < r; j++){
            mat.push(input[line].split(" ").map(Number));
            line++;
        }
        // console.log(r,c,mat);
        Rectangular_Matrix_Multiple_TestCases(r,c,mat)
    }
  }
  
    function  Rectangular_Matrix_Multiple_TestCases(r,c,arr){
        for(let i = 0; i < r; i++){
            let bag = ""
            for(let j = 0; j < c; j++){
              bag += (arr[i][j] + 1) + " "
            }
            console.log(bag)
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