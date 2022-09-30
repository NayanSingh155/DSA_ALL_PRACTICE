// Average of Primes Ended
// Description

// You are given a number, stored in a variable with the namenum. Find out the average of sum of all prime numbers in the range of [1,num], including the value stored innum

// Note :Considering 1 is not a prime number


// Input
// The first and the only line of the input contains the value stored innum


// Output
// Print thefloor value of average of sumof all prime numbers in the range of[1,num], includingnumitself


// Sample Input 1 

// 13
// Sample Output 1

// 6
// Hint

// In the sample test case, the value stored innum = 13. Therefore, all the prime numbers, in the range of[1,num]are

// 2
// 3
// 5
// 7
// 11
// 13

// Therefore, the sum of prime numbers becomes,2 + 3 + 5 + 7 + 11 + 13 = 41, number of prime numbers are 6.

// Therefore, the average becomes41 / 6 = 6.83, flooring the value to6, which is the required answer

function averagesOfPrime(num){
	//Enter Code Here

var sum=0;
var count=0;
for(var i=2;i<=num;i++)
{
    for(var j=2;j<=num;j++)
    {
        if(j==i)
        {
            sum=sum+i;
            count++
        }
          else if(i%j==0)
            {
                break;
            }
        }
    }
    var average=sum/count;
    console.log(Math.floor(average));

}