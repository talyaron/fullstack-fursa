function addStudent(arr, student) {
    var studentsArray = Object.assign([], arr);
    studentsArray.push(student);
    // const newArray =  arr;
    return studentsArray;
}
var s2 = {
    firstName: 'mohamed',
    lastName: 'jabaren',
    age: 25,
    address: 'Om fahim'
};
var s1 = {
    firstName: 'Yosef',
    lastName: 'Zoubi',
    age: 25,
    address: 'nazareth'
};
var students = [];
var arr2 = addStudent(students, s1);
arr2 = addStudent(arr2, s2);
for (var num in arr2) {
    console.log(arr2[num]);
}
