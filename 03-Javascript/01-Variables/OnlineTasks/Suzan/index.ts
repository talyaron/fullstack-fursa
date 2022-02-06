interface AboutMe{
    name: string
    email: string
    age: number
    phone?: string
}

const suzan:AboutMe = {name: 'Suzan Kassabry', email:'suzankassabry97@gmail.com', age:25};
console.log(suzan)
suzan.phone = '0537756049'

console.log(suzan)