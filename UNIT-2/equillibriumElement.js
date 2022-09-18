// Masai School Home
//  About 
//  Problems
//  Announcements
//  Submissions
//  Rankings
//  View Contest
//  Info
//  Pie Chart

// Editor position : Bottom
// Equilibrium Element Ended
// Description

// Given an array A of N positive numbers. The task is to find the position where equilibrium first occurs in the array. Equilibrium position in an array is a position such that the sum of elements before it is equal to the sum of elements after it.


// Input
// Input Format

// First line contains an integer N denoting the size of the array.

// Then in the next line are N space separated values of the array A.

// N <= 1000

// Ai <= 10000


// Output
// In a new line print the position at which the elements are at equilibrium if no equilibrium point exists print -1.


// Sample Input 1 

// 5
// 3 3 5 5 1
// Sample Output 1

// 3


function equilibriumElement(N, arr){
    let count=0;
    
    for(let i=0;i<N;i++){
        
        let right=0;
        let left=0;
        
        for(let j=0;j<N;j++){
            
            if(j>i){
                
                right+=arr[j];
                
            }else if(j<i){
                
                left+=arr[j];
                
            }
            
        }
        
        if(right==left){
            
            count=i+1;
            
        }
        
    }
    if(count>0){
        
        console.log(count)
        
        
    }else{
        
        console.log(-1);
        
    }
}