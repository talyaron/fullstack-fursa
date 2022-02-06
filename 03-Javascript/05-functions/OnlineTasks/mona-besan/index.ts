interface student{
    name:string
    age:number;

}


function addstudent(arr:Array<student>,s:student) :Array<student>
{
    const newArray = Object.assign([], arr);
    newArray.push(s);
  return newArray;
}
const studobj:student={name:'besan',age:25};
const arr:Array<student>=[studobj];
console.log(arr);

const newarr=addstudent(arr,{name:'mona',age:25});
console.log(newarr);
console.log(arr)




