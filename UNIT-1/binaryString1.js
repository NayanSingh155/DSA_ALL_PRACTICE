// Binary String 1 Ended
// Description

// You are given a string stored in a variable with the namestr, whose length is stored in a variable with the nameN

// The string is binary, which means it contains only 1's and 0's

// You have to find the length of the longest substring which contains only 0's

// For example, consider the value stored inN = 4, andstr = 1001

// All the non empty subarrays of the given string are

// 1
// 10
// 100
// 1001
// 0
// 00
// 001
// 0
// 01
// 1
// The longest substring containing only 0's is00, therefore, the required output is2

// Input
// The first line of the input contains the value stored inN

// The second line contains the value stored instr


// Output
// Print a single integer denoting the length of the longest substring containing only 0's

// Sample Input 1 

// 7
// 1000100
// Sample Output 1

// 3
// Sample Input 2 

// 11
// 01010010111
// Sample Output 2

// 2
// Hint

// In the first sample test case, the value stored inN = 7, andstr = 1000100. The longest substring having all 0's is000, whose length is 3. Therefore, the required output is 3

// In the second sample test case, the value stored inN = 11, andstr = 01010010111. The longest substring containing only 0's is00, whose length is 2. Therefore, the required output is 2

function binaryString(N,str){
    //write code here
    var count=0;
    for(var i=0;i<str.length;i++){
    for(var j=i;j<str.length;j++){
        var bag="";
        for(var k=i;k<=j;k++){
            bag+=str[k];
        }
        var sum=0;
        for(var a=0;a<bag.length;a++){
            sum+=bag[a];
        }
        if(sum==0){
            if(count<bag.length){
                count=bag.length;
            }
        }
    }
}
console.log(count);
}
