// Masai Palindromic Substring Ended
// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7

function masaiPlaindromicSubstring(S) {
    var max=0;
    for(var i=0;i<=S.length;i++){
        var bag="";
        for(var j=i;j<S.length;j++){
            bag=bag+S[j];
            if(isPalindrome(bag)){
                if(max<bag.length){
                    max=bag.length;
                }
            }
        }
    }
    console.log(max);
    function isPalindrome(str){
        var newStr="";
        for(var i=str.length-1;i>=0;i--){
            newStr+=str[i];
        }
        return(str==newStr);
    }
    
 }