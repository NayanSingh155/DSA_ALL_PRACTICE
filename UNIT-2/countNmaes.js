// Count Names Ended
// Description

// You are provided with N names, your task is to write a code that prints the name along with the number of times it is presently separated by space. (See sample test case for better understanding)

// Note : You don't have to take the input. 
// just complete the function and print the required output

// Input
// Input Format

// First line contains N which is the number of words present.

// Next N lines contain N names (which can be repeating)

// Constraints

// N < 100


// Output
// Output each name in a sorted manner along with the number of times it is present in the list of names.


// Sample Input 1 

// 3
// masai
// school
// masai
// Sample Output 1

// masai 2
// school 1
function countNames(N,strings){
    let str=strings
    str.sort();
    var obj = {};
    for (var i = 0; i < N; i++)
        if (obj[str[i]] == undefined)
            obj[str[i]] = 1;
        else
            obj[str[i]]++;

    for (let key in obj)
        console.log(key + " " + obj[key]);
}
