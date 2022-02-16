declare function require(name:string);

const express = require('express');
const app = express();
const port = 3000;


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
