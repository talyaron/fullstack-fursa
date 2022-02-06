//pure function get arguments and return new value, without changing the arguments
function add(a: number, b: number): number {
  return a + b;
}

const x = add(10, 20);
console.log(x); //30

interface Obj {
  a: number;
  b: number;
}

const obj: Obj = { a: 10, b: 20 };

function increaseObj(objfn: Obj): Obj {
  const newObj = Object.assign({}, objfn); //shallow copy
  newObj.a++;
  newObj.b++;

  return newObj;
}

let y: Obj = increaseObj(obj);

console.log(y); //{a:11, b:21}

console.log(obj); //{a:10, b:20}

function increaseArray(arr: Array<number>): Array<number> {
  const newArray = Object.assign([], arr);
  // const newArray =  arr;
  for (let i in newArray) {
    newArray[i]++;
  }

  return newArray;
}

const arr2: Array<number> = [1, 2, 3];
const arr3 = increaseArray(arr2);
console.log(arr3);
for (let i in arr2) {
  arr2[i] += 10;
}
console.log(arr3);
let j = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}