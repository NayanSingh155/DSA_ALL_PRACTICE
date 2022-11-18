
// You are given a numberNstored in a variable with the nameN

// You have to find the sum of firstNnatural numbers in the range of1 to N, including the value stored inNitself, but each number should be added five times.

// For example, consider the value stored inN = 2, therefore, the sum of firstNnatural numbers issum = 1 + 2, but each number has to be added five times.

// Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 +2 + 2= 15, which is the required answer


// Input
// The first and the only line of input contains the value stored inN


// Output
// Print the value ofsumas shown in the problem statement


// Sample Input 1 

// 2
// Sample Output 1

// 15
// Sample Input 2 

// 4
// Sample Output 2

// 50
// Hint

// In the sample test case, the value stored inN = 2, therefore, the sum of firstNnatural numbers issum = 1 + 2, but each number has to be added five times.

// Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 + 2 + 2 = 15, which is the required answer

function sumTillN(N){
	//write your code here
	var sum=0;
	for(var i=1;i<=N;i++)
	{
	    sum=sum+i*5;
	}
	console.log(sum);
}