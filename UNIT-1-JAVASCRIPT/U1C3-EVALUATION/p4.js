// ## **Square Object**

// 1. Create an object with a key called **side**.
// 2. The object must have 2 methods,
//     1. **perimeter:** It will return the perimeter of the square, and
//     2. **area:** It will return the area of square

// ```
// **Note :**
// Area of square = side * side
// perimeter of square = 4 * side
// ```


let obj={
    side: 2,
    perimeter: function(){
      return 4* this.side
    },
    area : function(){
      return this.side*this.side
    }
  }
  let peri=obj.perimeter();
  console.log(peri);
  let Area=obj.area();
  console.log(Area)