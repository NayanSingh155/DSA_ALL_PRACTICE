// Create a function to check if a number is Prime or Not

function Checkprime  (number)
{
  var count=0;
  for(var i=1;i<=number;i++)
    {
      if(number%i==0)
      {
        count++
      }
    }
  if(count==2)
  {
    return true;
  }
  else
  {
    return false;
  }
}
var x= Checkprime(7);
if(x==true)
{
  console.log("it is prime");
}
else
{
  console.log("it is not prime");
}

//2nd way

// Problem 1: Create a function to check if a number is Prime or Not

function checkIsPrime(num){
  let factors=0;
  for(let i=1;i<=num;i++)
    {
      if(num%i==0){
        factors++;
      }
    }
  if(factors==2){
    return true;
  }
  else{
    return false;
  }
  }
let x=checkIsPrime()

if(x==true){
  console.log(" 7 is Prime")
}
else{
  
  console.log(" 7 is Not Prime")
}