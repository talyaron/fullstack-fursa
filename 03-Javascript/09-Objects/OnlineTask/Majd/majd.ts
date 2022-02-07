interface Book{
    name:string;
    author:string;
    published:Date;
}

const harrypotter:Book ={
  name: "harrypotter",
  author:"unknown",
  published: new Date("01-01-2010"),
};

console.log(harrypotter);