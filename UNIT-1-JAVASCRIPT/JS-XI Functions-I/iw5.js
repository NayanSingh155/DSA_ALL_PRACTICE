// Problem 5: Write a function to replace spaces in a given string with - .

function replaceName(name){
    var bag="";
    for(var i=0;i<name.length;i++){
      if(name[i]==" "){
        bag=bag+"-";
      }else{
        bag=bag+name[i];
      }
      }
    return bag;
    }
   var x=replaceName("Nanhi kumari");
  console.log(x)