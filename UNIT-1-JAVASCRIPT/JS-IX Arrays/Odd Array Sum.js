// Odd Array Sum Ended
// Description

// You are given an array, stored in a variable with the sizearr

// The size of the array is stored in a variable with the namen

// You have to traverse the array, and print the sum of odd elements in the array.

// For example, consider the array asarr = [1 2 3 4 5], and the value stored inn = 5

// Then, the sum of odd elements are : 1 + 3 + 5 = 9

// 9

// Input
// The first line of the input contains the value stored inN, the size of the array

// The next line containsNspace separated numbers denoting the elements of the array


// Output
// Printthe sum of odd elementspresent in the array, as explained in the problem statement


// Sample Input 1 

// 5
// 1 2 3 4 5
// Sample Output 1

// 9
// Hint

// In the sample test case, the value stored inn = 5and the value stored inarr = [1 2 3 4 5]

// The odd numbers in the array are1 3 5

// Therefore, the sum of odd elements : 1+3+5 = 9

// 9

function oddArraySum(n, arr){
    //write code here
    var sum=0;
    for(var i=0;i<n;i++)
    {
        if(arr[i]%2==1)
        {
            sum=sum+arr[i];
        }
    }
    console.log(sum);
}
