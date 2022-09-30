//PROBLEM 4
// Problem 4: given stored username and password and input username and password, Print if the user can login or not. 

var stored_user="nanhi123@gmail.com";
var stored_password="123456";

var input_user="abc2gmail.com";
var input_password="122";
if(input_user=stored_user)
{
  if(input_password==stored_password)
  { 
    console.log("login succcess");
  }
    else
    {
      console.log("wrong password");
    }
} 