interface student {
    firstName: String;
    lastName: String;
    age: number;
}

let student1: student = {
    firstName: "Mohamed",
    lastName: "Zmero",
    age: 27,
}

let student2: student = {
    firstName: "yareen",
    lastName: "=ab",
    age: 23,
}

const arr: Array<student> = [student1, student2];

function addStudent(a: Array<student>): Array<student> {
    const newArray = Object.assign([], a);
    const student3: student = { firstName: "m", lastName: "n", age: 22 };
    newArray.push(student3)
    return newArray
}

console.log(addStudent(arr))
console.log(arr)