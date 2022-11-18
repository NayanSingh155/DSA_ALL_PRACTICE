// Maximum Frequency in the String Ended
// Description

// You are given a string A, having all lower case characters. You have to find and print the frequency of the characters, which is most frequent. In case, multiple characters, occur the same number of time, print the frequency of any one of them.

// Note: The string contains only lower case characters

// Note : You have to take the input yourself

// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case, contains N, the size of the string A.

// The next line of the test case contains the string A, itself.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 100


// Output
// For each test case, print a single integer denoting the frequency of the most frequent character in the string, on a new line.


// Sample Input 1 

// 1
// 5
// abcda
// Sample Output 1

// 2
// Hint

// In the sample test case, the frequency of the different characters are {a - 2}, {b - 1}, {c - 1}, {d - 1}. The frequency of the character 'a' is the highest which is 2. So, the output is 2.

var x={};
for(var i=0;i<N;i++)
{
    if(x[arr[i]]==undefined)
    {
        x[arr[i]]=1;
    }
    else
    {
        x[arr[i]]=x[arr[i]]+1;
    }
}
var a=0;
var b=0;
for(var key in x)
{
    if(x[key]>b)
    {
        b=x[key];
        a=key;
    }
}
console.log(a+"-"+b);