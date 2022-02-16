declare function require(name:string);

const express = require('express');
const app = express();
const port = 4000;


console.log('Hi all 2tre');

const x = 6;
console.log(x*4);
//console.log(process.env.USER);
app.use(express.static('client/build'));
app.get('/',(req,res)=>{
    console.log(req);
    res.send('Hello World! all');
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  