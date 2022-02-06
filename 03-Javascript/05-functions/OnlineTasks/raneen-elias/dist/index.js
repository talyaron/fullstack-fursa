function increaseObj(newStudent, arr) {
    var newArray = Object.assign([], arr); //shallow copy
    var stud = Object.assign(newStudent);
    console.log(newArray);
    console.log(newStudent);
    newArray.push(stud);
    return newArray;
}
var students = [{ id: 4, name: "hi" }];
var student1 = { id: 10, name: "Tal" };
var newArr = increaseObj(student1, students);
console.log(newArr);
