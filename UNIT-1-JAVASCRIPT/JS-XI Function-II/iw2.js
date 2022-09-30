// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

function lastIndexOf(arr,char)
  {
      for(var i=arr.length;i>=0;i--){
        if(arr[i]===char)
        {
          return i;
          break;
        }
      }return -1;
  }
var arr=["riya","kaalu","bhalu","lalu"]
   var x=lastIndexOf(arr,"kaalu");
      console.log(x)
    