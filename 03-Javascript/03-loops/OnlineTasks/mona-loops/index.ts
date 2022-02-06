interface profile{
    name:string;
    email:string;
    age:number;
    phonenumber:string;

}
const profobj: profile={name:'mona',email:'mona_arabiya@hotmail.com',age:25,phonenumber:'0502804839'};

for(let key in profobj)
{
    console.log(key+': '+profobj[key])
}