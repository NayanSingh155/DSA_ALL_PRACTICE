var name= [ "Nrupul", "Prateek" ,"Aman", "Albert", "Yogesh" ];
 var age= [32, 30, 26, 28, 44]; 

var data=[]
for(var i=0;i<name.length;i++){
  
  var person={};
  person.name=name[i]
  person.age=age[i]

  data.push(person)
}
console.log(data)
for(var i=0;i<data.length;i++){
  if(data[i].age > 30){
    console.log(data[i].name)
  }
}