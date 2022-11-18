// Sum of Array Ended
// Description

// You are given an array, whose size is stored in a variable of sizen

// The array is stored in a variable with the name,arr

// You have to print the sum of all elements of an array

// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]

// Therefore, the required output will be

// 15

// Input
// The first First line containsN, size of array.

// Next line contains N space integers, which denote the numbers present in the array


// Output
// Print sum of an array


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 15
// Hint

// You need to print sum of elements of array

function ArraySum(n, arr){
    //write code here
    var sum=0;
    for ( var i=0;i<n;i++)
    {
        sum=sum+arr[i];
    }
    console.log(sum);
}


