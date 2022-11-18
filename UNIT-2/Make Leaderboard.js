// Make Leaderboard Ended
// Description

// You are given name and marks of N different students in a hackerrank contest. Your task is to write a program that makes leaderboard of the students under following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write your own sorting algorithm


// Input
// Input Format :
// First line of input contains N

// Next N line contains name and marks respectively of N different students (where name and marks is separated by a space)



// Constraints :

// N < 100


// Output
// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank

// 2. If students have similar mark, their rank will be same(In case of similar marks, the person whose name comes first in alphabetical order comes first in order. However their rank will be same)

// 3. The student placed next to the same marks students will get the rank skipping the intermediate ranks.


// Sample Input 1 

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45
// Sample Output 1

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan

function runProgram(input){
    data=input.trim().split("\n")
    lines=Number(data[0])
    arr=[]
    for(var i=0;i<lines;i++){
        [name,mark]=data[i+1].trim().split(" ")
        temp={name:name,marks:+mark}
        arr.push(temp)
    }
    rank_maker(arr)
    
}

function sort_by_name(arr){
   for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            str1=arr[j].name
            str2=arr[j+1].name
            if(str1>str2){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
            
        }    
   } 
 return arr;
}

function sort_by_marks(arr){
   for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length-i-1;j++){
            str1=arr[j].marks
            str2=arr[j+1].marks
            if(str1<str2){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
            
        }    
   } 
 return arr;
}


function rank_maker(arr){
    
    arr=sort_by_name(arr);
    arr=sort_by_marks(arr);

    rank=1
    pre=1
    for(var i=0;i<arr.length-1;i++){
        console.log(rank,arr[i].name)
        pre++;
        if(arr[i+1].marks<arr[i].marks){
            rank=pre;
        }
    }
        if(arr[arr.length-1].marks<arr[arr.length-2].marks){
            console.log(pre,arr[arr.length-1].name)
        }
        else{
            console.log(rank,arr[arr.length-1].name)
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