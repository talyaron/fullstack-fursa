//pure function get arguments and return new value, without changing the arguments
function add(a, b) {
    return a + b;
}
var x = add(10, 20);
console.log(x); //30
var obj = { a: 10, b: 20 };
function increaseObj(objfn) {
    var newObj = Object.assign({}, objfn); //shallow copy
    newObj.a++;
    newObj.b++;
    return newObj;
}
var y = increaseObj(obj);
console.log(y); //{a:11, b:21}
console.log(obj); //{a:10, b:20}
function increaseArray(arr) {
    var newArray = Object.assign([], arr);
    // const newArray =  arr;
    for (var i in newArray) {
        newArray[i]++;
    }
    return newArray;
}
var arr2 = [1, 2, 3];
var arr3 = increaseArray(arr2);
console.log(arr3);
for (var i in arr2) {
    arr2[i] += 10;
}
console.log(arr3);
var j = myFunction(4, 3); // Function is called, return value will end up in x
function myFunction(a, b) {
    return a * b; // Function returns the product of a and b
}
