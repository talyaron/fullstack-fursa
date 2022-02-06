const arr:Array<any> = [2,'abc', 45, {a:45}] //

console.log(arr);

const arr2 = arr;

//by refernce
arr[0] = 200;
console.log(arr2[0]); //200

//by val (deep copy)

const arr3 = [...arr]; //spread operator
console.log(arr3);
arr[0] = 400;
console.log(arr3[0]); //200

const arr4:Array<string | number | boolean> = [23, 'true', true];