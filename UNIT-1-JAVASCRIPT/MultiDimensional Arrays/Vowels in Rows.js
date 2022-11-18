// Vowels in Rows Ended
// Description

// You are given a 2D array, whose dimensions are stored in two variables with the nameNandM

// The value stored inNdenotes the number of rows, and the value inMdenotes the number of columns

// The 2D array is stored in a variable with the namearr, and contains lower case English characters

// You have to printYes, if any particular row of a 2D array contains at least one vowel, at least printNo

// For example, consider the value stored inN = 3,M = 2, and the array isarr = [a,b],[c,d],[e,f], then the required output will be

// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)


// Input
// The first line of the input contains the value stored inNandM

// The nextNlines containMvalues each denoting the value stored inarr


// Output
// For each row, printYes, if the row contains at least one vowel, otherwise printNo

// Sample Input 1 

// 3 2
// a b
// c d
// e f
// Sample Output 1

// Yes
// No
// Yes
// Hint

// In the sample test case, the value stored inN = 3,M = 2, and the array isarr = [a,b],[c,d],[e,f], then the required output will be

// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)

for(var i=0;i<arr.length;i++)
{
    var count=0;
    var x = arr[i];
    for(var j=0;j<x.length;j++)
    {
        var y=x[j];
        if(y=="a"||y=="e"||y=="i"||y=="o"||y=="u")
        {
            count++;
        }
    }
    if(count>=1)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
}