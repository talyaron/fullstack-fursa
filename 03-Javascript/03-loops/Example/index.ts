//loops

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }


const obj = {a:1, b:2, home:"hi"}

for(let key in obj){
  
   console.log(key,':', obj[key]);
}

const arr:Array<any> = ['a','b','flower']

for(let index in arr){
    console.log(index)
    console.log(arr[index]);
}
console.log('----- of loop -----')
for(let elm of arr){
    console.log(elm)
}


