// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join
let str="shilpi"
let arr=[1,2,3,4,5]//1-2-3-4-5
function customArrayJoin(arr,str){
  var bag="";
    if(str==undefined){
      for(var i=0;i<arr.length;i++){
        if(i==arr.length-1){
          bag=bag+arr[i];
        } else{
        bag=bag+arr[i]+"-";
      }
      }  
    }
    else{
      for(var i=0;i<arr.length;i++){
        if(i==arr.length-1){
          bag=bag+arr[i];
        } else{
        bag=bag+arr[i]+str;
      }
    }
}

      console.log(bag)
}
// customArrayJoin(arr,"*");
customArrayJoin(arr);
customArrayJoin(str);
