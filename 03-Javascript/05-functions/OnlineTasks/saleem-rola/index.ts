
interface student {
  name: string;
  age : number;
  faculity:string;
  email:string;
}



function AddStudent(arr: Array<student>,newStudent:student): Array<student> {
  const newStudents = Object.assign([], arr);
  newStudents.push(newStudent)
  return newStudents
}
var students:Array<student>;
const std1:student = {name:"saleem",age:25,faculity:"information systems",email:"sbsaleem76@gmail.com"};
students= AddStudent(students,std1)
const std2:student = {name:"gfd",age:27,faculity:"computer scinncve",email:"sbsaleem76@gmail.com"};
students= AddStudent(students,std2)
console.log("array so far","\n");


console.log(students);


console.log("testing new array");
var studentstest:Array<student>;

console.log(studentstest);


const std3:student = {name:"sadgdfleem",age:21,faculity:"art",email:"sbsaleem76@gmail.com"};
studentstest= AddStudent(students,std3)
const std4:student = {name:"dfgd",age:22,faculity:"sport",email:"sbsaleem76@gmail.com"};
studentstest= AddStudent(studentstest,std4)


console.log(studentstest);

