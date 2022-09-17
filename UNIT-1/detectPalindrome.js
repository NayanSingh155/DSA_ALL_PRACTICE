// Detect Palindrome Ended
// Description

// You are given an integernum.

// You need to printYesif that integer is a palindrome or else printNo.

// A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward,such asmadamorracecar.


// Input
// Input Format

// First line containsnum, a integer.

// Constraints

// 1 <= num <= 1000000


// Output
// PrintYesorNodepending upon the integer.


// Sample Input 1 

// 1221
// Sample Output 1

// Yes
// Hint

// Sample 1 Explanation

// We printYesas1221`is a palindrome.

function detectPalindrome(num){
    //write code here
    let revStr="";
    for(let i=num.length-1;i>=0;i--){
        revStr=revStr+num[i]
    }if(revStr==num){
        console.log("Yes")
    }else{
        console.log("No")
    }
    }