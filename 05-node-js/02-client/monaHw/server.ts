declare function require(name:string);
import axios from 'axios';
const express = require('express');
const app = express();
const port = 4000;




app.get('/get-wood-type', (req, res) => {
  const woods = [{type:'pine wood', height:70,width:70,thick:70}, {type:'insulation', height:70,width:70,thick:70},{type:'multyLayer', height:70,width:70,thick:70}];

  res.send(woods)
})

const orders= axios.get('http://localhost:3004/userOrder') 
console.log(orders)
app.get('/get-orders',(req,res)=>{
  try {
    res.status(200).send({ orders });
  } catch (error) {
    console.info(error);
    res.send({ error });
  }
})


//console.log(process.env.USER);
app.use(express.static('client/build'));
app.get('/',(req,res)=>{
    console.log(req);
    res.send('Hello World! all');
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  