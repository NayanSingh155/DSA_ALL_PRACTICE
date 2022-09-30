var data=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
  
]
// console.log(data)
function sum(marks){
  var s=0;
  for(var i=0;i<marks.length;i++){
    s=s+marks[i];
    
  }
  return s
}
function high(data){
  var max=-Infinity;
  var grade=data.grade;
  var name=null;
  for(var i=0;i<data.students.length;i++){
    var x=data.students[i];
    var total=sum(x.marks);
    if(total>max)
    {
      max=total
      name=x.name
      
    }
  }
  console.log(grade+"-"+name+"-"+total)
}
for(var i=0;i<data.length;i++){
  high(data[i])
}