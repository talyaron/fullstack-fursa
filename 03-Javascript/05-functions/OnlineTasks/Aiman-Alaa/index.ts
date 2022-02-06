interface student {
    college : string,
    name : string,
    phone : string,
    grades : number,
    
}

const arr:Array<student> = [];

let student1:student = {college : "Ariel" , name: "Aiman" , phone:"0544463973" , grades:100};
arr.push(student1);

function add_student (arr:Array<student>):Array<student> {
    const arr2 = [...arr];
    let student:student = {college : "Haifa" , name: "Alaa" , phone:"0544463973" , grades:100};
    arr2.push(student);
    return arr2;
}

function add_student2 (arr:Array<student>, student:student):Array<student> {
    const arr2 = [...arr];
    arr2.push(student);
    return arr2;
}

let arr3:Array<student> = add_student(arr);
arr3 = add_student(arr3);
let arr4:Array<student> = add_student2(arr3 , student1);

for(let key in arr4) {
    console.log(arr4[key]);

}