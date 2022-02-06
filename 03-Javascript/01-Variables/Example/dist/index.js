//typescript is js with types
//primitive types
var a = "abcd";
var b = 23;
var c = true;
var d = 123;
d = "hi all";
var e = 200;
console.log(a, b);
var obj = { a: "23", b: 23 };
obj.a = "45";
obj.c = true;
console.log(obj);
//by ref (object) and by value (primitives)
var a1 = 45;
var a2 = a1;
console.log(a2); //45
a1 = 200;
console.log(a2); //45
var obj1 = { a: 45 };
var obj2 = obj1;
console.log(obj2.a); //45
obj1.a = 200;
console.log(obj2.a); //200
