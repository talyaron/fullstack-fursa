function AddStudent(arr, newStudent) {
    var newStudents = Object.assign([], arr);
    newStudents.push(newStudent);
    return newStudents;
}
var students;
var std1 = { name: "saleem", age: 25, faculity: "information systems", email: "sbsaleem76@gmail.com" };
students = AddStudent(students, std1);
var std2 = { name: "gfd", age: 27, faculity: "computer scinncve", email: "sbsaleem76@gmail.com" };
students = AddStudent(students, std2);
console.log("array so far", "\n");
console.log(students);
console.log("testing new array");
var studentstest;
console.log(studentstest);
var std3 = { name: "sadgdfleem", age: 21, faculity: "art", email: "sbsaleem76@gmail.com" };
studentstest = AddStudent(students, std3);
var std4 = { name: "dfgd", age: 22, faculity: "sport", email: "sbsaleem76@gmail.com" };
studentstest = AddStudent(studentstest, std4);
console.log(studentstest);
