

interface person {
  name: string;
  age: number;
  email: string;
  phoneNumber:string;
}

const obj:person = { name: "saleem", age: 25,email:"sbsaleem76@gmail.com",phoneNumber:"0544413979" };

for(let key in obj)
{
  console.log("key: "+key+", value is:"+obj[key]);
  
}

