function addstudent(arr, s) {
    var newArray = Object.assign([], arr);
    newArray.push(s);
    return newArray;
}
var studobj = { name: 'besan', age: 25 };
var arr = [studobj];
console.log(arr);
var newarr = addstudent(arr, { name: 'mona', age: 25 });
console.log(newarr);
console.log(arr);
