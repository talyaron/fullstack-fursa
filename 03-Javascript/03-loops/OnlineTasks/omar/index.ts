interface Personal {
    name: string;
    email: string;
    age: number;
    phone: number;
    work : string ; 
  }
  
  const details:Personal = { 
      name : "Omar" ,
      email : "omarhallomi7@gmail.com" , 
      age : 26 ,
      phone : 9658 ,
      work : "software enginer"
   };


   for(var key in details){
    console.log(details[key])
}