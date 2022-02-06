var student1 = {
    firstName: "Mohamed",
    lastName: "Zmero",
    age: 27
};
var student2 = {
    firstName: "yareen",
    lastName: "=ab",
    age: 23
};
var arr = [student1, student2];
function addStudent(a) {
    var newArray = Object.assign([], a);
    var student3 = { firstName: "m", lastName: "n", age: 22 };
    newArray.push(student3);
    return newArray;
}
console.log(addStudent(arr));
console.log(arr);
