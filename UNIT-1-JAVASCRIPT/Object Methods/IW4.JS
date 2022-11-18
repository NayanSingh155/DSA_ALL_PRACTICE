
var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  
  
  
  let newarr=[]
  for(j in sales){
    
    IndObj=sales[j]
    newobj={};
    newobj.item=  IndObj.item;
     newobj.stock=  IndObj.stock;
     newobj.original=  IndObj.original;
     newobj.discount=  IndObj.discount;
  
    IndObj.totalsales=function(){
      if(this.discount!==undefined){
        newobj.sales=this.original-this.discount;
      }else{
        newobj.sales=this.original
      }
    }
   
       IndObj.totalsales(); 
    
       IndObj.totalfun=function(){
      newobj.total=this.stock*this.original;
    }
  
    IndObj.totalfun();
    newarr.push(newobj);
  
    
  }
  console.log(newarr)