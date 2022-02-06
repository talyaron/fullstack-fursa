
interface inf{
    name: string;
    age: number;
    Email: string;
    gender: string;
    phone: string;
}

const obj:inf = {name:"Majd Nassar", age: 25, Email:"majdna97@gmail.com", gender:"male", phone: "0544463973"};


for(let index in obj){
    console.log(obj[index]);
}
