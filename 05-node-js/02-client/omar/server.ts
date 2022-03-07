 declare function require(name:string);
const path=require("path")
const express = require('express');
const app = express();
const port = 4000;
app.use(express.static('client/build'));


//routes for data


//static files
// // const dirPath = path.join(__dirname, '../public');
// console.log(dirPath)
// app.use(express.static(dirPath));


//data

app.get('/get-all-users', (req, res) => {
  const users = [{id:1, name:'John'}, {id:2, name:'Mary'}];

  res.send(users)
})

app.get('/',(req,res)=>{
  console.log(req);
  res.send('Hello World! all');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
