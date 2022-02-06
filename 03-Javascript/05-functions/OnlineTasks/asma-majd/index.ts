interface Obj2 {
    name: string;
    id: string;
  }



const arr : Array<Obj2> =[{name: "asma",id:"1"}];
const stud:Obj2={name: "majd",id:"2"};
function addObj(arr:Array<Obj2>, student:Obj2 ):Array<Obj2>{
    const newArray = Object.assign([], arr);
    newArray.push(student)
    return newArray;

}  

const arr1 = addObj(arr,stud);
console.log(arr1);