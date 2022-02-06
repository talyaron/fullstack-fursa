interface Student{
    firstName:string
    lastName:string
    age:number
}

function addStudent(arr:Array<Student>, student:Student):Array<Student>{
    const newArray = Object.assign([], arr);
    const newStudent = Object.assign({}, student);

    newArray.push(newStudent)

    return newArray;
}

const arr:Array<Student> = [{firstName:'Suzan', lastName:'Kassabry', age:25}, {firstName:'Omar', lastName:'Hallomi', age:26}]
const s:Student = {firstName:'Ahmad', lastName:'Zoabi', age:25}


const new_array = addStudent(arr,s);

console.log(new_array)