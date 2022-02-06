var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr = [];
var student1 = { college: "Ariel", name: "Aiman", phone: "0544463973", grades: 100 };
arr.push(student1);
function add_student(arr) {
    var arr2 = __spreadArrays(arr);
    var student = { college: "Haifa", name: "Alaa", phone: "0544463973", grades: 100 };
    arr2.push(student);
    return arr2;
}
function add_student2(arr, student) {
    var arr2 = __spreadArrays(arr);
    arr2.push(student);
    return arr2;
}
var arr3 = add_student(arr);
arr3 = add_student(arr3);
var arr4 = add_student2(arr3, student1);
for (var key in arr4) {
    console.log(arr4[key]);
}
