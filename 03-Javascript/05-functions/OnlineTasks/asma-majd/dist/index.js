var arr = [{ name: "asma", id: "1" }];
var stud = { name: "majd", id: "2" };
function addObj(arr, student) {
    var newArray = Object.assign([], arr);
    newArray.push(student);
    return newArray;
}
var arr1 = addObj(arr, stud);
console.log(arr1);
