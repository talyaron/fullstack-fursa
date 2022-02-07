interface Student {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
}

function addStudent(arr: Array<Student>, student: Student): Array<Student> {
    const studentsArray : Array<Student> = Object.assign([], arr);
    studentsArray.push(student)
    // const newArray =  arr;
    return studentsArray;
}

const s2: Student = {
    firstName: 'mohamed',
    lastName: 'jabaren',
    age: 25,
    address: 'Om fahim'
}
const s1: Student = {
    firstName: 'Yosef',
    lastName: 'Zoubi',
    age: 25,
    address: 'nazareth'
}

const students : Array<Student> = [];
let arr2:Array<Student> = addStudent(students,s1);
arr2 = addStudent(arr2,s2);
for(let num in arr2){
    console.log(arr2[num]);
}
