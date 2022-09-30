
// Problem 2: Use the above function to print the Primes from 2 to a given limit

function checkprime (number)
{
  var count=0;
  for(var i=2;i<=number;i++)
    {
      if(number%i==0)
      {
        count++;
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
  var limit=1000;
  for(var i=2;i<=limit;i++)
    {
      var x=checkprime(i);
      if(x==true)
      {
        console.log(i,"it is prime");
      }
      else
      {
        console.log(i,"it is not prime");
      }
    }
  