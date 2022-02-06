

// my object
interface person {
  name: string;
  age: number;
  email: string;
  phoneNumber:string;
}

const obj:person = { name: "saleem", age: 25,email:"sbsaleem76@gmail.com",phoneNumber:"0544413979" };

console.log(JSON.stringify(obj))

