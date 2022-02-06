var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var arr = [2, 'abc', 45, { a: 45 }]; //
console.log(arr);
var arr2 = arr;
//by refernce
arr[0] = 200;
console.log(arr2[0]); //200
//by val (deep copy)
var arr3 = __spreadArrays(arr); //spread operator
console.log(arr3);
arr[0] = 400;
console.log(arr3[0]); //200
var arr4 = [23, 'true', true];
