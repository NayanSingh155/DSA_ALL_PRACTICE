// Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties;

var yob=1995;
var age=2022-yob;

console.log(age);

if((age>=13)&&(age<=19))
  {
     console.log("Teenage");
   }
else if((age>=20)&&(age<=29))
{
  console.log("Twenties");
}
else
{
  console.log("NA");
}