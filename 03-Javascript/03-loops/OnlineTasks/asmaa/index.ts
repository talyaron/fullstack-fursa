interface TheObj {
    name: string;
    email: string;
    age: number;
    phonenumber: string;
  }
  
  const obj:TheObj = { name:"asmaa",email:"asmaafraij@gmail.com",age:25,phonenumber:"0527408690"};

  for(var val in obj){
    console.log(val, ":" ,obj[val]);
  }