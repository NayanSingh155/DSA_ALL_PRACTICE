// Given an array find the unique items in the array
let party=["suraj","ramu","sonu","suraj","mohan"]
let diary={};
for(let i=0;i<party.length;i++){
  let person=party[i];
  diary[person]=1;
}
console.log(diary);

