// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function


function substring(str,start,end) {
    var y="";
    if(end===undefined){
      for(var i=start;i<str.length;i++){
        y=y+str[i];
      }
      return y;
    }   
    else {
      for(var i=start;i<end;i++){
        y=y+str[i]
      }
      return y;
    }
  }
  var x="nayan";
  console.log(substring(x,2));
  
  