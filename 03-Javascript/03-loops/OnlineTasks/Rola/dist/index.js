var obj = { name: "Rola", email: "Rola.marei", age: 24, phonenumber: 39580 };
var arr = ["name:Rola", "email:Rola.marei", "number:24,39580"];
obj.age = 26;
obj.phonenumber = 540844;
for (var key in obj) {
    console.log(key, ':', obj[key]);
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elm = arr_1[_i];
    console.log(elm);
}
