// Nobita and Change Ended
// Description

// Nobita is given a number N (length of the string) and a string, the string contain both Lowercase and Uppercase English Alphabet characters , convert all Uppercase characters
// into lowercase then output the entire string.



// e.g. "abAbC"  should be changed to "ababc"



// Note: Using inbuilt functions is not allowed and will lead to disqualification.


// Input
// Input Format:

// First line of input contains the number N , denoting the length of the string.

// Second line of input contains the string.



// Constraints:
// 1<=N<=1000


// Output
// Output the string after changing the uppercase characters into lowercase


// Sample Input 1 

// 5
// abAbC
// Sample Output 1

// ababc

//convert all upper case char in lower case in string

var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var newstr="";
for(var i=0;i<str.length;i++)
{
    for(var j=0;j<upper.length;j++)
    {
        if(str[i]==upper[j])
        {
            newstr+=lower[j];
        }
        else if(str[i]==lower[j])
        {
            newstr+=str[i];
        }
    }
}
console.log(newstr);
