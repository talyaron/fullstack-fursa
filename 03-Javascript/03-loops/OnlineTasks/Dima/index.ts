
interface person{
    name: string;
    age: number;
    Email: string;
    gender: string;
    phone: string;
}

const obj:person = {name:"Dima Abbas", age: 25, Email:"dimaabbas25@gmail.com", gender:"female", phone: "0525041028"};

console.log(obj);

console.log("---loop---");

for(let index in obj){
    console.log(obj[index]);
}
