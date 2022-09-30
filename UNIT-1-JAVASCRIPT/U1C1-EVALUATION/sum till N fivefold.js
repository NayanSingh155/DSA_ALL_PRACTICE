// sum till N fivefold Ended
// Description

// You are given a numberNstored in a variable with the nameN

// You have to find the sum of firstNnatural numbers in the range of1 to N, including the value stored inNitself, but each number should be added fivefold

// For example, consider the value stored inN = 3, therefore, the sum of firstNnatural numbers issum = 1 + 2 + 3, but each number has to be addedfivefold

// Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 = 30, which is the required answer


// Input
// The first and the only line of input contains the value stored inN

// Output
// Print the value ofsumas shown in the problem statement

// Sample Input 1 

// 3
// Sample Output 1

// 30
// Hint

// In the sample test case, the value stored inN = 3, therefore, the sum of firstNnatural numbers issum = 1 + 2 + 3, but each number has to be addedfivefold

// Therefore,sum = 1 + 1 + 1 + 1 + 1 + 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 = 30, which is the required answer

function sumTillfivefold(N) { 
	//write your code here
	var sum=0;
	for(var i=1;i<=N;i++)
	{
	    sum=sum+i*5;
	    
	}
	console.log(sum);
}
