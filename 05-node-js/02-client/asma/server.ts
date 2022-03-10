//declare function require(name:string);

const express = require('express');
const app = express();
const port = 4001;

//routes for data
//static files

app.use(express.static('client/build'));

//data

app.get('/get-all-users', (req, res) => {
  const titles = [{id:1, txt:'Welcome to the Store'}];
  console.log(titles[0].txt)
  res.send(titles)
})

app.get('/',(req,res)=>{
  console.log(req);
  res.send('Hello World! all');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
