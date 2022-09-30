// Problem 3 : Given an array of numbers find the average of all the even numbers.

var marks=[12,9,15,90,16,20]

var sum=0;
var count=0;

for(var i=0; i<marks.length;i++)
  {
    if(marks[i]%2==0)
    {
      sum=sum+marks[i];
      count++;
    }
  }
console.log(sum/count);