//typescript is js with types
//primitive types




//objects
interface person {
    Name: string;
    email: string;
    birthDay: Date;
    phoneNumber: string;

}

const obj:person = { Name:"Alaa Abu raya",email: "Alaa.ali.aga1@gmail.com" , birthDay: new Date("1995-09-09") , phoneNumber:"0505388550"};
obj.Name = "Abo Ali";
// obj.email = "Alaa@gmail.com";

console.log("---loop---");

for(let val in obj){
    console.log(obj[val]);
}

