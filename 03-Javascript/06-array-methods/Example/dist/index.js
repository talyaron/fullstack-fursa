var arr = [
    { name: 'lama', age: 23 },
    { name: 'yosef', age: 23 },
    { name: 'zmiro', age: 27 }
];
var olderThan24 = arr.filter(function (student) {
    return student.age < 24;
});
var sortByAge = arr.sort(function (a, b) {
    return b.age - a.age;
});
//create new array with class number
var studnetOfClass2 = arr.map(function (student) {
    student["class"] = "2";
    return student;
});
arr.forEach(function (student) {
    console.log(student);
});
console.log(olderThan24);
console.log(sortByAge);
console.log(studnetOfClass2);
