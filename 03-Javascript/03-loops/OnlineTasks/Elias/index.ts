//objects
interface TheObj {
  name: String;
  Email: String;
  age: number;
  phonenumber:String;
}

const profile:TheObj = { 
    name: "Elias",
    Email: null,
    age: null,
    phonenumber:"0528423617"
};
profile.Email="eliasrenawi23@gmail.com";
profile.age=24;



for(let i in profile){
  
   console.log(i,':', profile[i]);
}