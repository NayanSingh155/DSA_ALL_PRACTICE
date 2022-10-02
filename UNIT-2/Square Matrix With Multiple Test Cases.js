// Square Matrix With Multiple Test Cases Ended
// Description

// Square Matrix With Multiple Test Cases


// Input
// The first line of the input containsT, the number of test cases

// The first line of each test case containsN, the dimensions of the matrix

// The nextNlines containNspace separated integers, denoting the elements of the matrix


// Output
// Print all the elements of the matrix row by row, by adding 1 to each element, on a new line, as shown in the sample output

// Sample Input 1 

// 2
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// 2
// 1 2
// 3 4
// Sample Output 1

// 2 3 4
// 5 6 7
// 8 9 10
// 2 3 
// 4 5
function runProgram(input) {
    input = input.split("\n")
    let tc = +input[0]
    let line = 1
    for(let i = 0; i < tc; i++){
        let N = input[line];
        line++;
        let mat = []
        for(let j = 0; j < N; j++){
            mat.push(input[line].split(" ").map(Number))
            line++;
        }
        // console.log(N,mat);
        square_matrix(N,mat)
    }
  }
  
    function square_matrix(N,mat){
        for(let i = 0; i < N; i++){
            let bag= "";
            for(let j = 0; j < N; j++){
              bag+= (mat[i][j] + 1) + " ";
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