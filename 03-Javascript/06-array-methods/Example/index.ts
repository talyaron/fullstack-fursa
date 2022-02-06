interface Students{
    name:string;
    age:number;
    class?:string;
}

const arr:Array<Students> = [
    {name:'lama', age:23},
    {name:'yosef', age:23},
    {name:'zmiro', age:27}
]

const olderThan24:Array<Students> = arr.filter((student:Students)=>{
    return student.age <24
})

const sortByAge:Array<Students> = arr.sort((a:Students, b:Students)=>{
    return b.age - a.age;
})

//create new array with class number
const studnetOfClass2:Array<Students> = arr.map((student:Students)=>{
    student.class = "2"
    return student;
})

arr.forEach((student:Students)=>{
    console.log(student)
})

console.log(olderThan24);
console.log(sortByAge)
console.log(studnetOfClass2)