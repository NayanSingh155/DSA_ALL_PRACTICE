// Matrix Sum Prime Check Ended
// Description

// In this question, you are given a 2D array stored in a variable with the namearr

// The number of rows in the matrix is stored in the variable with the nameN, while the number of columns stored in the matrix is stored in a variable with the nameM

// You have to find the sum of matrix and printtrueorfalsebased on weather thatsumisprimeor not.

// For example, consider the value stored inN = 3, andM = 3, and

// N = 3 M = 3

// arr = [[1 2 3]
//        [4 5 6]
//        [7 8 9]]
// The sum of elements of matrix is1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.45is not a prime number therefore, the required output isfalse`

// Note : The 2D array may contain duplicate elements. Each instance of a prime number should be counted separately

// Input
// The first line of the input contains the values stored inNandM

// The next line contains the values stored inarr


// Output
// Printtrueorfalsebased on weather thatsumisprimeor not.

// Sample Input 1 

// 3 3
// 1 2 3 
// 4 5 6
// 7 8 9
// Sample Output 1

// false
// Hint

// In the sample test case, the value stored inN = 3, andM = 3, and

// N = 3 M = 3

// arr = [[1 2 3]
//        [4 5 6]
//        [7 8 9]]
// The sum of elements of matrix is1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45.45is not a prime number therefore, the required output isfalse

function matrixSumPrimeCheck(N, M, arr){
	// write your code here...
	var sum=0;
	for(var i=0;i<M;i++)
	{
	    for(var j=0;j<N;j++)
	    {
	        sum=sum+arr[i][j];
	    }
	}
	var count=0;
	for(var i=1;i<=sum;i++)
	{
	    if(sum%i==0)
	    {
	        count++
	    }
	}
	if(count==2)
	{
	    console.log("true")
	}
	else
	{
	    console.log("false")
	}
}