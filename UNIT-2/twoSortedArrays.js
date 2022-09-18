// function runProgram(input){
    input=input.split("\n");
    let  tc=+input[0];
    let line=1;
    for(let i=0; i<tc; i++){
        
      let N= +(input[line]);
      line++;
      
      let arrA=input[line].split(" ").map(Number);
      line++;
      
      let arrB=input[line].split(" ").map(Number);
      line++;
      
      
    //   console.log(N,arrA,arrB)
    
    
     TwoSortedArray(N,arrA,arrB);
  }
   

function TwoSortedArray(N,arrA,arrB){
    let C=0;
    let L=0;
    let R=N-1;
    while(L<N && R>=0){
        if(arrA[L]<arrB[R]){
            L++;
        }else if(arrB[R]<arrA[L]){
            R--;
        }else{
            L++;
            R--;
            C++;
        }
    }
    console.log(C);
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