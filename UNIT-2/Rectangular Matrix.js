// Rectangular Matrix Ended
// Description

// Rectangular Matrix - Single Test Case


// Input
// The first line of the input containsNandM, the dimensions of the matrix

// The nextNline containsMspace separated integers, denoting the elements of the matrix


// Output
// Print the elements of the matrix, row by row, by adding 1 to each element, as shown in the sample input

// Sample Input 1 

// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// Sample Output 1

// 2 3 4 5
// 6 7 8 9
// 10 11 12 13


function runProgram(input) {
    input = input.split("\n")
    let [N, M] = input[0].split(" ").map (Number)
    let mat = []
    for(let i = 0; i < N; i++){
        mat.push(input[i + 1].split(" ").map(Number))
    }
    // console.log(N,M,mat)
    Rectangular_Matrix(N,M,mat)
  }
  
    function Rectangular_Matrix(N,M,mat){
        let bag = ""
        for(let i = 0; i < N; i++){
            for(let j = 0; j < M; j++){
              bag+=(mat[i][j] + 1) + " ";
            }
            bag+="\n";
        }
        console.log(bag)
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