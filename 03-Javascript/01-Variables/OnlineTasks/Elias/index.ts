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
console.log(profile);

profile.Email="eliasrenawi23@gmail.com";
profile.age=24;

console.log(profile);


