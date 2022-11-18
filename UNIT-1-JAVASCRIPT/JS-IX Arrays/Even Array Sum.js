// Even Array Sum Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print sum of even elements

// Print each number on a new line

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// The sum of even elements are : 2 + 4 = 6

// Then, the required output will be

// 6

// Input
// The first line of the input contains the value stored inN, the size of the array

// The next line containsNspace separated numbers denoting the elements of the array


// Output
// Print the sum of even elements present in the array, as explained in the problem statement


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 6
// Hint

// In the sample test case, the value stored inn = 5and the value stored inarr = [1 2 3 4 5]

// The only even numbers in the array are2 4

// Therefore, sum of even elements are : 2 + 4 = 6

// 6

function evenArraySum(n, arr){
    //write code here
    var sum=0;
    for(var i=0;i<n;i++)
    {
        if(arr[i]%2==0)
        {
            sum=sum+arr[i];
        }
        
    }
    console.log(sum);
}