// Distinct Elements in an Array Ended
// Description

// A "distinct Element"is an element that occurs only once in an "Array"
// You are given an integernand  an arrayarrcontaining n elements
// You have to find the number of distinct elements in the array.

// Input
// The first line of input will contain the value ofn
// The second line of input will contain the arrayarrcontaining n elements
// Constraints

// 1 <= N <= 100

// Output
// Print the number of distinct elements in the array

// Sample Input 1 

// 8
// 1 1 5 2 6 6 3 5
// Sample Output 1

// 2
// Hint

// In the given inputn = 8andarr = [1,1,5,2,6,6,3,5]
// The distinct elements present in the array are-> 2 & 3
// Hence number of distinct elements= 2Which is the required answer.

function distinctElements(n, arr){
	let obj={};
	for(let i=0;i<arr.length;i++){
	    let x=arr[i];
	    if(obj[x]==undefined){
	        obj[x]=1;
	    }else{
	        obj[x]++;
	    }
	}
// 	console.log(obj)
let bag=0
 for(let key in obj){
     if(obj[key]==1){
         bag+=obj[key]
     }
 }
 console.log(bag)
}