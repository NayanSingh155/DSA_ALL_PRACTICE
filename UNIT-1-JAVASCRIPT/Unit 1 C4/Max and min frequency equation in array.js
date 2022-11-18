// Max and min frequency equation in array Ended
// Description

// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to solve the equation -15*x + 2*y, wherexis the smallest frequency of an element in the array, while

// yis the largest frequency of an element in the array

// For example, consider the value stored inN = 7, andarr = [1 2 2 3 3 3 5]

// The frequency of the different elements in the array are

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 5 -> 1

// The smallest frequency in the array is1, with elements1, and 5 with frequency 1, while the largest frequency in the array is 3
// as3 has a frequency 3. So, the value ofx = 1, and the value ofy = 3

// Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output

// Input
// The first line of the input contains the value stored inN

// The next line contains the values stored inarr


// Output
// Find the value of the equation given in the problem statement, as explained in the problem statement

// Sample Input 1 

// 7
// 1 2 2 3 3 3 5
// Sample Output 1

// 21
// Hint

// In the sample test case, the value stored inN = 7, andarr = [1 2 2 3 3 3 5]

// The frequency of the different elements in the array are

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 5 -> 1

// The smallest frequency in the array is1, with elements1, and 5 with frequency 1, while the largest frequency in the array is 3
// as3 has a frequency 3. So, the value ofx = 1, and the value ofy = 3

// Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output

function minMAx(N,arr){
    let obj={}
    for(let i=0;i<N;i++){
        let a=arr[i]
        if(obj[a]==undefined){
            obj[a]=1;
        }else{
            obj[a]++
        }
    }
    let max=-Infinity
    for(key in obj){
        if(obj[key]>max){
            max=obj[key]
        }
    }
    let min=Infinity
    for(k in obj){
        if(obj[k]<min){
            min=obj[k]
        }
    }
    console.log(15*[min]+2*[max])
   }