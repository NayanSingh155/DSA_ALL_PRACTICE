// Problem 1: Print the Calendar date in the below format

// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12


// Problem 1: Print the Calendar date in the below forma
for(var month=1;month<=12;month++)
  {
    var days_value=31;
    if(month==2)
    {
      days_value=28;
    }
        else if(month==4||month==6||month==9||month==11)
        {
          days_value=30;
        }
                
              
      for(var day=1;day<=days_value;day++)
        {
          console.log("month=",month,"days=",day);
        }
}
  