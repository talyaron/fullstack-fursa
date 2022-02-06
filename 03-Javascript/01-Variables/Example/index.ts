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


