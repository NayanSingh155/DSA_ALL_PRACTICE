// Create an object with the following functionality

// Ability to add student details and 3 subject marks
// // Methods to find the student with the least and highest total


let details={
    data:[],
    addstudents:function(nam,mat,sci,eng){
      
        let obj={};
                 obj.name = nam;
                 obj.maths = mat;
                 obj.science=sci;
                 obj.english=eng;
          this.data.push(obj);
      },
    low_marks: function(){
      let pad=Infinity;
      let low_student;
      for(let i=0;i<this.data.length;i++){
        let total=this.data[i].maths+this.data[i].science+this.data[i].english;
        if(total<pad){
          pad=total;
          low_Student=this.data[i];
        }
      }
      console.log(low_student,"has the lowest marks");
    },
    max_marks:function(){
      let pad=-Infinity;
      let highStudent;
      for(let i=0;i<this.data.length;i++){
        let total=this.data[i].maths+this.data[i].science+this.data[i].english;
        if(total>pad){
          pad=total;
          highStudent=this.data[i]
        }
      }
      console.log(highStudent.name,"has the highest marks");
    }
  };
  
  details.addstudents("sona",76,57,75)
  details.addstudents("tina",78,77,45)
  details.addstudents("aarif",99,35,65)
  
  details.low_marks();
  details.max_marks();