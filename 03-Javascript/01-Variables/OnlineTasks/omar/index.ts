interface Personal {
    name: string;
    email: string;
    age: number;
    phone: number;
    work : string ; 
  }
  
  const obj:Personal = { 
      name : "Omar" ,
      email : "omarhallomi7@gmail.com" , 
      age : 26 ,
      phone : 9658 ,
      work : "software enginer"
   };


  obj.name = "Ahmad";
  obj.email = "hallomi.omar@gmail.com";
  obj.age = 18 ;
  obj.phone = 2568 ; 
  obj.work = " Footballer" 
  console.log(obj);