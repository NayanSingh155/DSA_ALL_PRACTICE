// ## **First Letter Capital**

// 1. Write a function that takes one parameter **(i.e array of string)** and returns array of string. **For Example : function firstLetterCapital(arr)**
// 2. The function should perform the given task: Given an array, it will return the array of strings having the first letter of each string will be capital.
// - **Sample Input 1**

// ```
// array - ["masai","school"]

// ```

// - **Sample Output 1**

// ```
// ["Masai", "School"]

// ```

// - **Sample Input 2**

// ```
// array - ["hi", "john", "how", "are", "you"]

// ```

// - **Sample Output 2**

// ```
// ["Hi", "John", "How", "Are", "You"]
// ```

// array - ["masai","school"]
// ["Masai", "School"]
// array - ["hi", "john", "how", "are", "you"]
// ["Hi", "John", "How", "Are", "You"]


function convertLower(arr){
    var bag=""
    var  L="abcdefghijklmnopqrstuvwxyz"
      var Up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    arr2=[]
      for(i=0;i<arr.length;i++){
       P=arr[i]
        for(j=0;j<P.length;j++){
           for(k=0;k<Up.length;k++){
             if(Up[k]==P[j]||L[k]==P[j]){
               bag=bag+lower[k]
             }
             }
          }arr2.push(bag)
        bag=""
      }return arr2
    
      
    }
    var result=convertLower(["masai","school"])
    console.log(result)
    var result1=convertLower(["hi", "john", "how", "are", "you"])
    console.log(result1)