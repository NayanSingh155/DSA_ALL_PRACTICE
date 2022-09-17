// Missing Vowels Ended
// Description

// You are given a string, stored in a variablestr, and the length of the string is stored in the variableN

// You have to find all the vowels that are not present in the string and print them.
// If a string contains all the vowels, in that case, print -1.
// For example, consider the value stored inN = 6, andstr = nature
// out of the 5 vowels(a,e,i,o,u)
// the word "nature" contains a,u,e
// The vowel that are not present in the string are : i,o

// hence the output is io

// Note : The string contains only lower case English Alphabets

// Input
// The first line of the input contains the value stored inN

// The second line of the input contains the value stored instr


// Output
// Print all the vowels that are not present in the given string.

// Sample Input 1 

// 6
// nature
// Sample Output 1

// io
// Hint

// the value stored inN = 6, andstr = nature.

// out of the 5 vowels(a,e,i,o,u)
// the word "nature" contains a,u,e
// The vowel that are not present in the string are : i,o

// hence the output is io

function missingVowel(N, str) {
    let obj={};
    for(let i=0;i<str.length;i++){
        let x=str[i];
        obj[x]=1;
    } //console.log(obj)
  let bag="";
  let v="aeiou";
  for(let i=0;i<v.length;i++){
      let x=v[i];
      if(obj[x]===undefined){
          bag=bag+x;
      }
  }
//   console.log(bag)
if(bag==""){
    console.log("-1")
    }else{
        console.log(bag)
    }

}