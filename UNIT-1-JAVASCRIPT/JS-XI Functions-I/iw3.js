// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function checkIsPrime(num){
    let factors=0;
    for(let i=0;i<=num;i++){
      if(num%i==0)
      {
        factors++;
      }
  }
  if(factors!==2){
    return true;
  }else{
    return false;
  }
  }
  let start=2;
  let end=50;
  for(let j=start;j<=end;j++){
    let x=checkIsPrime(j);
    if(x==true){
      console.log(j,"is not a prime number")
    }else{
      console.log(j,"is a prime number")
    }
  }