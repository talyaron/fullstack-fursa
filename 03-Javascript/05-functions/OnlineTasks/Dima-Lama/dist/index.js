var studentArr = [];
function AddStudent(arr, obj) {
    var newArr = Object.assign([], arr);
    newArr.push(obj);
    return newArr;
}
var student1 = { name: "Lama", id: "12345" };
var studentArr1 = AddStudent(studentArr, student1);
console.log(studentArr1);
var student3 = { name: "New", id: "12347" };
studentArr.push(student3);
console.log(studentArr1);
var student2 = { name: "Dima", id: "12346" };
var studentArr2 = AddStudent(studentArr1, student2);
console.log(studentArr2);
