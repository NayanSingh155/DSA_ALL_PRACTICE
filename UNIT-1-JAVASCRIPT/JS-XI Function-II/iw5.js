// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function
function inculdes(arr,str,a=0)
{
  if (a>=0)
  {
    var present=false
    for(var i=a;i<arr.length;i++)
      {
        if(str===arr[i])
        {
          present=true;
          break;
        }
      }
    console.log(present);
  }
    else if(a<0)
    {
      var present=false;
      for(var j=(arr.length+a);j<arr.length;j++)
      {
        if(str===arr[i])
        {
          present=true;
        }
      } 
      console.log(present)
    }

}
var arr=["alok","pintu","rakhi","bikky"]
inculdes(arr,"piya",3)









