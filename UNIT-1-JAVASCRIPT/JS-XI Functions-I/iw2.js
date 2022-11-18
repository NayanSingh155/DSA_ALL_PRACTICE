
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

//2nd way

// Problem 2: Use the above function to print the Primes from 2 to a given limit

function checkIsPrime(num){
  let factors=0;
  for(let i=0;i<=num;i++){
    if(num%i==0)
    {
      factors++;
    }
}
if(factors==2){
  return true;
}else{
  return false;
}
}
let start=2;
let end=50;
for(let j=start;j<=end;j++){
  let x=checkIsPrime(j);
  if(x==false){
    console.log(j,"is not a prime number")
  }else{
    console.log(j,"is a prime number")
  }
}
  