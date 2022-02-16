declare function require(name:string);

<<<<<<< HEAD
const x = 3;
console.log(x*4);
//console.log(process.env.USER);
=======
const express = require('express');
const app = express();
const port = 3000;
>>>>>>> tal


//routes for data


//static files

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
