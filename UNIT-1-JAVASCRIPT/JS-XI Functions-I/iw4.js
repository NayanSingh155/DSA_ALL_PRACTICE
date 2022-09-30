// Problem 4: Write a function to check if the char is a small case or not.

function check(char){
    let lower="abcdefghijklmnopqrstuvwxyz";
  for(let i=0;i<lower.length;i++)
    {
      if(char==lower[i]){
        return true;
      }
    }
    return false;
  }
   let x=check("i");
  if(x==true){
    console.log("small case");
  }else{
    console.log("capital character");
  }
  