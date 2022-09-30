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

