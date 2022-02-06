interface student {
    id : number;
    name : string;

  }
  
  function increaseObj(newStudent: student, arr: Array<student>): Array<student> {
    let newArray = Object.assign([], arr); //shallow copy
    const stud: student = Object.assign(newStudent);
    console.log(newArray);
    console.log(newStudent);
    newArray.push(stud);
    return newArray;
  }

  let students: Array<student> = [{id:4, name:"hi"}];
  const student1: student = { id: 10, name: "Tal" };
  const newArr = increaseObj(student1, students);
  console.log(newArr);
