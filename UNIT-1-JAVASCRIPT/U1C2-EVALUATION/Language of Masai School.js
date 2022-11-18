// Language of Masai School Ended
// Description

// You are given a string stored in a variable with the namestr

// Also, the length of the string is stored in a variable with the nameN

// You have to modify the string, such that if the first character of the string is a vowel, then addmasaiat the start of the string

// Else if the first character of the string is a consonant, then addschoolto the end of the string

// For example, consider the value stored inN = 3, andstr = abc

// Now, since the first character of the string is a vowel, therefore, we addmasaito the start of the string

// Therefore, the string becomesmasaiabc, which is the required output.

// Note: The string contains only lowercase characters


// Input
// The first line of the input containsN, the length of the string

// The next line contains the value stored instr


// Output
// Print the modified string as explained in the problem statement.

// Sample Input 1 

// 3
// abc
// Sample Output 1

// masaiabc
// Hint

// From the sample test case, the value stored inN = 3, andstr = abc

// Now, since the first character of the string is a vowel, therefore, we addmasaito the start of the string

// Therefore, the string becomesmasaiabc, which is the required output.
function languageOfMasaiSchool(N, str){
	//Write your code here
// 	 var first_letter = str[0];

//     if (
//         first_letter === "a" ||
//         first_letter === "e" ||
//         first_letter === "i" ||
//         first_letter === "o" ||
//         first_letter === "u"
//     ) {
//         str = "masai" + str;
//     } else {
//         str = str + "school";
//     }
//     console.log(str);
// }
    var bag="";
    
    if(str[0]=="a"||str[0]=="e"||str[0]=="i"||str[0]=="o"||str[0]=="u"){
        bag=bag+"masai"+str;
    }
    else
    {
        bag=bag+str+"school"
    }

    console.log(bag)
}