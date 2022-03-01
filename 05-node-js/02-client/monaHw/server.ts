declare function require(name:string);
import axios from 'axios';
const express = require('express');
const app = express();
const port = 4000;




app.get('/get-wood-type', (req, res) => {
  const woods = [{type:'pine wood', height:70,width:70,thick:70}, {type:'insulation', height:70,width:70,thick:70},{type:'multyLayer', height:70,width:70,thick:70}];

  res.send(woods)
})
app.use(express.static('client/build'));
app.use(express.json());


app.get('/get-orders',async (req,res)=>{
  try {
   const response= await axios.get('http://localhost:3004/userOrder') 
   const {data}=response;
  //  console.log(data)
    res.status(200).send(data)
  } catch (error) {
    console.info(error);
    res.send({ error });
  }
})
app.post('/add-orders',(req,res)=>{
  try{
    const {orderObj}=req.body;
    console.log(orderObj)
    if(!orderObj) throw new Error("no order")
    axios.post('http://localhost:3004/userOrder',orderObj)

    res.send({ ok: true });

  }
  catch(error){
    res.send({ error: error.message });

  }

})
app.delete('/delete-order',(req,res)=>{
  try{
  const {id}=req.body;
  console.log(req.body)
  if(!id) throw new Error("no id")

  axios.delete(`http://localhost:3004/userOrder/${id}`)
  }
  catch(error){
    res.send({ error: error.message });

  }
})


//console.log(process.env.USER);
app.get('/',(req,res)=>{
    console.log(req);
    res.send('Hello World! all');
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  