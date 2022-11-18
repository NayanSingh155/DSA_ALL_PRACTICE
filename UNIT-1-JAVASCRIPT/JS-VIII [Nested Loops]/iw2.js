
// Problem 2: Print Prime Numbers from 1 to given limit

for (var number=2;number<=100;number++)
  {
    var factors=0;
        
    for(var i=1;i<=13;i++)
      {
        if(number%i==0)
        {
          factors++;
        }
      }
                
                
          if(factors==2)
                      
            {
              console.log(number,"is prime");
            }
        }