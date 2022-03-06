// console.log('Hi all 2tre');

// const x = 3;
// console.log(x*4);
// console.log(process.env.USER);

// declare function require(name:string);
const path=require('path');
const express = require('express');
const app = express();
const port = 3000;


//routes for data


//static files

// const dirPath = path.join(__dirname, '../public');
// console.log(dirPath)


// app.use(express.static('dirPath'));
app.use(express.static('public'));


//data

app.get('/getadat/all-users', (req, res) => {
  res.send('Hello World!')
})

app.get('/all',(req,res)=>{
  console.log(req);
  res.send('Hello World! all');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





