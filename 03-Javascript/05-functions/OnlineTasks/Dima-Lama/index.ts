
interface student{
    name: string;
    id: string;
}

const studentArr:Array<student> = [];

function AddStudent(arr:Array<student>, obj:student):Array<student>{
    const newArr:Array<student> = Object.assign([], arr);
    newArr.push(obj);
    return newArr
}

const student1:student = {name:"Lama", id:"12345"};

const studentArr1:Array<student> = AddStudent(studentArr, student1);

console.log(studentArr1);

const student3:student = {name:"New", id:"12347"};

studentArr.push(student3);

console.log(studentArr1);

const student2:student = {name:"Dima", id:"12346"};


const studentArr2:Array<student> = AddStudent(studentArr1, student2);

console.log(studentArr2);