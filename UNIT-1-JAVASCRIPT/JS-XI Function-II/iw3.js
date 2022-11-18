// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function



function ArrayofSlice(arr,num)
  {    var output=[];
    for (var i=num;i<arr.length;i++)
      {
        var bag="";
        bag=bag+arr[i];
        output.push(bag);
      }return output;
  }
var array=["mitu","jiya","kirti","piya","sweeti"];
console.log(ArrayofSlice(array,1));//calling function








