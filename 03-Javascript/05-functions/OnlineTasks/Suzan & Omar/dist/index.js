function addStudent(arr, student) {
    var newArray = Object.assign([], arr);
    var newStudent = Object.assign({}, student);
    var returnArray = Object.assign(newArray, newStudent);
    return returnArray;
}
var arr = [{ firstName: 'Suzan', lastName: 'Kassabry', age: 25 }, { firstName: 'Omar', lastName: 'Hallomi', age: 26 }];
var s = { firstName: 'Ahmad', lastName: 'Zoabi', age: 25 };
var new_array = addStudent(arr, s);
console.log(new_array);
