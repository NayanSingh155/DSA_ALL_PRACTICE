// Day of the Week Ended
// Description

// Given the current day, and a number N, find what day will it be after N days.

// Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}


// Input
// The first line of the input contains the name of the current day.

// The second line of the input contains N.

// Constraints

// 1 <= N <= 1000


// Output
// Print the name of the day, which will occur after N days.


// Sample Input 1 

// Wednesday
// 8
// Sample Output 1

// Thursday
// Hint

// In the sample test case, the current day is Wednesday. After N = 8 days, it will be Thursday.

// Language: 
  


function dayOfTheWeek(day, N) {
    let dayObj={
        "Monday" :0,
        "Tuesday":1,
        "Wednesday":2,
        "Thursday":3,
        "Friday":4,
        "Saturday":5,
        "Sunday":6,
    }
    let current_day=undefined;
    let ans_day=undefined;
     N=N%7;
    
    for(let i in dayObj){
        if(day==i){
            current_day=dayObj[i];
        }
    }
}