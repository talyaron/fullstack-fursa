//typescript is js with types
//primitive types

var a: string = "abcd";
var b: number = 23;
var c: boolean = true;
var d: any = 123;
d = "hi all";
const e: number = 200;

console.log(a, b);

//objects
interface TheObj {
  a: any;
  b: number;
  c?: any;
}

const obj:TheObj = { a: "23", b: 23 };
obj.a = "45";
obj.c = true;
console.log(obj);


//by ref (object) and by value (primitives)

var a1:number = 45;
var a2:number = a1;
console.log(a2) //45
a1 = 200;
console.log(a2) //45

const obj1 = {a:45};
const obj2 = obj1;
console.log(obj2.a); //45
obj1.a = 200;
console.log(obj2.a); //200


