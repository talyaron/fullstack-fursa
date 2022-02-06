let a = 2,
  b = 5; //global scope

function add(): number {
  a = 23;
  return a + a + b + b;
}

console.log(add()); //7