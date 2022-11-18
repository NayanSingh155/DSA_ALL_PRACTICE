// Characters of a 1D Array X Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// Each element of the string contains one of these symbols -'*', '%', '@'

// The symbols represent the following values

// * -> 3

// % -> 2

// @ -> 1

// You have to find the sum of the string, such that for each symbol add the value of its corresponding values

// For example, consider the value stored inN = 5, and the value stored in str =*@%%@

// Therefore, replacing each value with its corresponding value, we get -31221Which is the required answer.


// Input
// The first line of the input contains the value stored inN

// The next line stores the value stored instr


// Output
// Print the output as explained in the problem statement

// Sample Input 1 

// 5
// *@%%@
// Sample Output 1

// 31221
// Hint

// The symbols represent the following values

// * -> 3

// % -> 2

// @ -> 1

// The given string is*@%%@ , After mapping the given string with the above values

// Thus, the result is31221

function charactersofArray(N, str){
	//Write your code here
	var bag=""
	for(var i=0;i<N;i++){
	  if(str[i]=="*"){
	    bag=bag+3  
	  } 
	  if(str[i]=="%"){
	      bag=bag+2
	  }
	  if(str[i]=="@"){
	      bag=bag+1
	  }
	} 
	 console.log(bag)
}