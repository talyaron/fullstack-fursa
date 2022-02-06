//loops
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
var obj = { a: 1, b: 2, home: "hi" };
for (var key in obj) {
    console.log(key, ':', obj[key]);
}
var arr = ['a', 'b', 'flower'];
for (var index in arr) {
    console.log(index);
    console.log(arr[index]);
}
console.log('----- of loop -----');
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elm = arr_1[_i];
    console.log(elm);
}
