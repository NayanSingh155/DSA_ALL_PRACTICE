// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle
var rectangle={
    length:12,
    breadth:10,
    area:function(){
      return (this .length* this.breadth)
    },
      peri:function(){
      return 2*(this.length+this.breadth)
    } 
    };
    var area=rectangle.area();
    var peri=rectangle.peri();
    console.log(area);
    console.log(peri);
    // rectangle.area();
    // rectangle.peri();
    